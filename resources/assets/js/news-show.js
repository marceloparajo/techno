import App from './modules/app'
import eplanningMod from './modules/eplanning'
import eplvideoMod from './modules/eplvideo'
import LazyLoad from 'vanilla-lazyload'
import { sendHitGalleryAnalytics } from './modules/analytics'

const SnippetShowNews = function () {

	const initialize = () => {
		App.initialize()
		initBottomGallery()
		handleClickGallery()
		initLazyLoad()
		eplanningMod.init()
		eplvideoMod.init()
	}

	const handleClickGallery = () => {
		$('.btn-open-gallery').click((e) => {
			e.preventDefault()
			$('#gallery-thumbnails a').first().trigger('click')
		})
	}

	const placeAdsMiddleBody = () => {
		const content = $('#tpl-ads-middle-body').html()
		const cantParagraph = $('#news-body p').length

		// Ads 1
		if (cantParagraph > 3) {
			const p1 = $('#news-body p:eq(2)')
			if (p1.length > 0) {
				let field = $(content)
				field.addClass('float-left')
				field.insertBefore(p1)
			}
		}

	}

	const placeRelacionadasMiddleBody = () => {
		const cantParagraph = $('#news-body p').length
		const numParagraph = Math.round(cantParagraph / 2)
		const tmpl = $('#tpl-relacionadas');
		if (tmpl.data('showme')) {
			const content = tmpl.html()
			const p = $(`#news-body p:eq(${numParagraph})`)
			const html = $(content)
			html.insertBefore(p)
		}
	}

	const initLazyLoad = () => {
		const lazyLoad = new LazyLoad({
			elements_selector: '.lazyload'
		})
	}

	const initBottomGallery = () => {
		const el = $('#gallery-thumbnails')

		el.lightGallery({
			thumbnail:true
		})

		el.on('onBeforeSlide.lg', (event, prevIndex, index) => {
			sendHitGalleryAnalytics(index)
		})
	}

	return {
		init: () => {
			initialize()
		}
	}

}()

$(document).ready(SnippetShowNews.init())