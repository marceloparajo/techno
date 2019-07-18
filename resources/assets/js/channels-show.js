import App from './modules/app'
import eplanningMod from './modules/eplanning'
import eplvideoMod from './modules/eplvideo'
import Lazyload from 'vanilla-lazyload'

const SnippetChannelsShow = function () {

	const initLazyLoad = () => {
		const lazyload = new Lazyload({
			elements_selector: '.lazyload'
		})
	}

	return {
		init: () => {
			App.initialize()
			initLazyLoad()
			eplanningMod.init()
			eplvideoMod.init()
		}
	}

}()

$(document).ready(SnippetChannelsShow.init)

