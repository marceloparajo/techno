import handleToggleHeaderMenu from './modules/header-menu'
import { simulateClick} from './modules/utils'
import 'lightgallery.js'
import 'lg-thumbnail.js'


const SnippetShowNews = function () {
	const {light_gallery_images} = window.sharedData

	const initialize = () => {
		handleClickOpenGallery()
		handleToggleHeaderMenu()
	}

	const handleClickOpenGallery = () => {
		const buttons = document.getElementsByClassName('btn-open-gallery')
		const _gallery_container = document.getElementById('images-gallery')

		if (_gallery_container !== null && _gallery_container !== undefined) {
			const _first_thumbnail = document.querySelector('#images-gallery a')

			lightGallery(_gallery_container, {
				thumbnail: true
			})
			Array.from(buttons).forEach(el => {
				el.addEventListener('click', e => {
					e.preventDefault()
					simulateClick(_first_thumbnail)
				})
			})
		} else
			Array.from(buttons).forEach(el => {
				el.addEventListener('click', e => {
					e.preventDefault()
					lightGallery(e.currentTarget, {
						dynamic: true,
						dynamicEl: light_gallery_images,
						thumbnail: true
					})
				})
			})
	}

	return {
		init: () => initialize()
	}

}()

document.addEventListener('DOMContentLoaded',  () => SnippetShowNews.init());


