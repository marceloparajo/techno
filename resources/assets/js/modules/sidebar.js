export default function () {
	handleClickColumnistasWidgetRow()
	initPerformVideo()
}

const handleClickColumnistasWidgetRow = () => {
	const _el = document.getElementById('columnistas')

	if (_el === null) return 0

	const _buttons = document.getElementsByClassName('btn-columnistas-widget-row')
	const _container = document.getElementById('grupo-col-0')
	const width = _container.clientWidth
	let margin = 0


	Array.from(_buttons).forEach(_el => {
		_el.addEventListener('click', e => {
			e.preventDefault()
			const index = e.currentTarget.dataset.index
			margin = -(width * index)

			_container.style.marginLeft = margin + 'px';
		})
	})
}

const initPerformVideo = () => {
	const _container = document.getElementById('perform-video')

	if (_container === null) return 0

	if (navigator.userAgent.search("Firefox") !== -1) return 0

	const script = document.createElement("script")
	script.type = 'text/javascript'
	script.defer = true
	script.src = 'https://player.performgroup.com/eplayer.js#47b3f29670c0b844c32971e284.15c1379yp89d01tb3mar0jq831'
	_container.appendChild(script)
}
