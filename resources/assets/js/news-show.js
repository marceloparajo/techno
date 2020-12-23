import LazyLoad from 'vanilla-lazyload'
import 'lightgallery.js'

const SnippetShowNews = function () {

	const initialize = () => {
		initLazyLoad()
		initGallery()
		handleClickOpenGallery()
	}

	const initGallery = () => {
		console.log('init gallery')
		lightGallery(document.getElementById('gallery-thumbnails'))
	}

	const handleClickOpenGallery = () => {
		const buttons = document.getElementsByClassName('btn-open-gallery')

		Array.from(buttons).forEach(el => {
			el.addEventListener('click', e => {
				console.log(e)
			})
		})
	}

	const handleClickGallery = () => {
		$('.btn-open-gallery').click((e) => {
			e.preventDefault()
			$('#gallery-thumbnails a').first().trigger('click')
		})
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
			//sendHitGalleryAnalytics(index)
		})
	}

	return {
		init: () => {
			initialize()
		}
	}

}()

document.addEventListener('DOMContentLoaded',  () => SnippetShowNews.init());


