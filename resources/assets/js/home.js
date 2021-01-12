import Lazyload from 'vanilla-lazyload'
import handleToggleHeaderMenu from './modules/header-menu'

const SnippetHome = function () {

	const initialize = () => {
		initLazyload()
		initRadioTicker()
		handleToggleHeaderMenu()
	}

	const initRadioTicker = () => {
		const _container = document.getElementById('radio-ticker')

		if (_container === null) return 0

		const _ticker_elements = document.getElementsByClassName('radio-news')
		let tickerIndex = 1

		setInterval(() => {
			Array.from(_ticker_elements).forEach((el, index) => {
				el.style.display = 'none'
			})

			_ticker_elements[tickerIndex].style.display = 'block'
			tickerIndex = ((tickerIndex + 1) >= _ticker_elements.length) ? 0 : tickerIndex + 1;
		}, 5000)
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
