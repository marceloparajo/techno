import App from './modules/app'
import eplanningMod from './modules/eplanning'
import eplvideoMod from './modules/eplvideo'
import Lazyload from 'vanilla-lazyload'

const SnippetHome = function () {

	const initLazyload = () => {
		const lazyLoad = new Lazyload({
			elements_selector: '.lazyload',
		})
	}

	return {
		init: () => {
			App.initialize()
			initLazyload()
			eplanningMod.init()
			eplvideoMod.init()
		}
	}

}()

$(document).ready(SnippetHome.init())

$(window).resize(function(){
	if( $(window).width() < 1262) {
		$(".maincontainer").removeClass("conmega");
	}
});