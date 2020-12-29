import Lazyload from 'vanilla-lazyload'

const SnippetChannelsShow = function () {

	const initialize = () => {
		initLazyLoad()
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

