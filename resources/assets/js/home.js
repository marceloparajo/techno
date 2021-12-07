import handleToggleHeaderMenu from './modules/header-menu'
import SidebarWidgets from './modules/sidebar'

const SnippetHome = function () {

	const initialize = () => {
		//handleToggleHeaderMenu()
		SidebarWidgets()
	}

	return {
		init: () => initialize()
	}
}()

document.addEventListener('DOMContentLoaded',  () => SnippetHome.init());