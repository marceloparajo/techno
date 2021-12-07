import initializeHeaderMenu from './modules/header-menu'

const SnippetChannelsShow = function () {

	const initialize = () => {
		initializeHeaderMenu()
	}

	return {
		init: () => initialize()
	}

}()

document.addEventListener('DOMContentLoaded',  () => SnippetChannelsShow.init());

