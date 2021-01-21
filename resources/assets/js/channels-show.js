import Lazyload from 'vanilla-lazyload'
import initializeHeaderMenu from './modules/header-menu'
import SidebarWidget from './modules/sidebar'

const SnippetChannelsShow = function () {

	const initialize = () => {
		initLazyLoad()
		initializeHeaderMenu()
		SidebarWidget()
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

