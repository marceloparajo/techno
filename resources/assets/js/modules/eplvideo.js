import inViewport from 'in-viewport'

let videos = []
let listenInterval = ''

class video {
	constructor (player) {
		this.player = player
		this.autoplay = true
		this.init()
	}

	init() {
		this.player.skipAds({delayInSeconds: 7})
		this.handleEvents()
	}

	handleEvents() {
		this.player.on('pause', (ev) => {
			if (ev.userInitiated)
				this.autoplay = false
		})
	}
}

function init() {
	$('#js-eplvideo').on('load', searchAndLoadVideos)
}

function searchAndLoadVideos() {
	const fields = $('.eplvideo')

	$.each(fields, (index, el) => {
		const field = $(el)
		loadVideo(field.attr('id'), field.data('code'))
	})

	if (fields.length > 0) initInterval()
}

function initInterval() {
	listenInterval = setInterval(listenInView, 1000)
}

function listenInView() {
	if (videos.length > 0) {

		// Busco si hay video reproduciendose
		const videoPlaying = videos.filter(obj => {
			return ! obj.player.isPaused()
		})

		if (videoPlaying.length <= 0) {

			const auVideos = videos.filter(obj => {
				return obj.autoplay
			})

			if (auVideos.length <= 0) clearInterval(listenInterval)

			// Reviso cada video para encontrar alguno que esté en pantalla
			$.each(auVideos, (index, video) => {
				const div = video.player.getDiv()
				if (inViewport(div)) {

					if (video.player.isPaused()) {
						video.player.play()
						return false
					}
				}

			})
		} else {
			const div = videoPlaying[0].player.getDiv()
			if (! videoPlaying[0].player.isMuted()) videoPlaying[0].autoplay = false
			if (! inViewport(div) && ! videoPlaying[0].player.isPaused() && videoPlaying[0].player.isMuted()) videoPlaying[0].player.pause()
		}

	}
}

function loadVideo(id, code) {
	eplvideo(id).setup({
		player: "perfilcom",
		video: code,
		responsive: true,
		loop: false,
		autoplay: false
	}).on('ready', () => {
		videos.push(new video(eplvideo(id)))
	})
}



export default {
	init: init
}