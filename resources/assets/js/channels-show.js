import Lazyload from 'vanilla-lazyload'
import initializeHeaderMenu from './modules/header-menu'

const SnippetChannelsShow = function () {

	const initialize = () => {
		initLazyLoad()
		initializeHeaderMenu()
	}

	const initLazyLoad = () => {
		const lazyload = new Lazyload({
			elements_selector: '.lazyload'
		})
	}

	return {
		init: () => initialize()
	}

}()

document.addEventListener('DOMContentLoaded',  () => SnippetChannelsShow.init());

