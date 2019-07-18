import { initAnalytics } from './analytics'
import { initComscore } from './comscore'

function initialize() {
	const analytics_run = $('meta[name="analytics-run"]').attr('content')

	setJqueryExtends()
	handleClickIframe()
	headerUI()

	if (analytics_run === '1') {
		initAnalytics()
		initComscore()
	}

	showButtonCloseStickyBottomAds()
	handleClickCloseBottomStickyAds()
}

const showButtonCloseStickyBottomAds = () => {
	const ads_container = $('.sticky-bottom-ads')

	if (ads_container.is(':visible')) {
		setTimeout(() => {
			const btn = $('#button-close-sticky-ads')
			btn.show()
		}, 8000)
	}
}

const handleClickCloseBottomStickyAds = () => {
	$('#button-close-sticky-ads').click(e => {
		const btn = $(e.currentTarget)
		const container = btn.parent('div')
		const ads_container = container.find('.ads-space')

		ads_container.attr('data-reload', 'false')
		container.hide();
	})
}

function handleClickIframe () {
	const $containers = $('.iframe-container')

	$containers.click(e => {
		const $container = $(e.currentTarget)
		const $iframe = $container.find('iframe')

		$iframe.addClass('clicked')
	})

	$containers.mouseleave(e => {
		const $container = $(e.currentTarget)
		const $iframe = $container.find('iframe')

		$iframe.removeClass('clicked')
	})
}

function setJqueryExtends () {
	$.fn.extend({
		animateCss: function(animationName, callback) {
			const animationEnd = (function(el) {
				const animations = {
					animation: 'animationend',
					OAnimation: 'oAnimationEnd',
					MozAnimation: 'mozAnimationEnd',
					WebkitAnimation: 'webkitAnimationEnd',
				}

				for (let t in animations) {
					if (el.style[t] !== undefined) {
						return animations[t]
					}
				}
			})(document.createElement('div'))

			this.addClass('animated ' + animationName).one(animationEnd, function() {
				$(this).removeClass('animated ' + animationName)

				if (typeof callback === 'function') callback()
			})

			return this
		},
	})
}

function headerUI() {
	const header_logo = $("#logo-small");
	const header_navbar = $('#header-navbar')
	const header_search = $('#header-search')

	$(window).scroll(function() {
		const scroll = $(window).scrollTop();

		if (scroll >= 120 && header_logo.hasClass('logo')) {
			header_logo.removeClass('logo').addClass("logo-alt");
			header_navbar.removeClass('mainnavbar').addClass("mainnavbar-alt");
			header_search.removeClass('buscador').addClass("buscador-alt");

		} else if (scroll < 120 && header_logo.hasClass('logo-alt')) {
			header_logo.removeClass("logo-alt").addClass('logo');
			header_navbar.removeClass('mainnavbar-alt').addClass("mainnavbar");
			header_search.removeClass('buscador-alt').addClass("buscador");
		}
	});
}

export default {
	initialize: initialize
}