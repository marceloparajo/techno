import Lazyload from 'vanilla-lazyload'

const SnippetHome = function () {

	const initialize = () => {
		initLazyload()
	}

	const initLazyload = () => {
		const lazyLoad = new Lazyload({
			elements_selector: '.lazyload',
		})
	}

	return {
		init: () => initialize()
	}
}()

document.addEventListener('DOMContentLoaded',  () => SnippetHome.init());

/*$(window).resize(function(){
	if( $(window).width() < 1262) {
		$(".supercontenedor").removeClass("conmega");
	}
});*/
