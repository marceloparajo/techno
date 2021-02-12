import Cookies from 'js-cookie'
import {formatISO, parseISO, add, compareAsc, format} from 'date-fns'
import tmpl_login_menu from './login-menu.mustache'
import tmpl_signwall_modal from './signwall-modal.mustache'
import tmpl_bottom_socket from './bottom-socket.mustache'
import tmpl_metered_modal from './metered-modal.mustache'
import tmpl_premium_modal from './premium-modal.mustache'
import tmpl_middle_invitation from './middle-invitation.mustache'

window.paywallConfig.paywallUrl = 'https://mi.perfil.com/'
window.paywallConfig.cookieDomain = '.perfil.com'
window.paywallConfig.debug = false
window.paywallConfig.allowedContentTypes = ['articulo']

window.pw_show_premium_modal = () => {
	const current_url = window.location.href
	const _container = document.getElementById('pw-content')

	_container.innerHTML = tmpl_premium_modal({
		paywall_url: paywallConfig.paywallUrl,
		current_url: current_url,
		logged: paywall.auth.isLogged()
	})

	dataLayer.push({
		'event': 'wallModal',
		'eventCategory': 'paywall',
		'eventAction': 'modal-impresion',
		'eventLabel': 'paywall-premium',
		'ecommerce': {
			'promoView': {
				'promotions': [
					{
						'id': 'paywall-premium-modal-default',
						'name': 'modal premium paywall default',
						'creative': 'default',
						'position': 'automatico'
					}]
			}
		}
	})

	const buttons = document.getElementsByClassName('pw-paywall-premium-modal-btn-call-to-action')

	Array.from(buttons).forEach(el => {
		el.addEventListener('click', e => {
			e.preventDefault()

			dataLayer.push({
				'event': 'wallModal',
				'eventCategory': 'paywall',
				'eventAction': 'modal-click',
				'eventLabel': 'paywall-premium',
				'ecommerce': {
					'promoClick': {
						'promotions': [
							{
								'id': 'paywall-premium-modal-default',
								'name': 'modal premium paywall default',
								'creative': 'default',
								'position': 'automatico'
							}]
					}
				}
			})

			location.href = `${window.paywallConfig.paywallUrl}?continue=${current_url}&limit=true&msg=exclusivo`
		})
	})
}

window.pw_show_metered_modal = () => {
	const _container = document.getElementById('pw-content')

	_container.innerHTML = tmpl_metered_modal()

	dataLayer.push({
		'event': 'wallModal',
		'eventCategory': 'paywall',
		'eventAction': 'modal-impresion',
		'eventLabel': 'paywall-metered',
		'ecommerce': {
			'promoView': {
				'promotions': [
					{
						'id': 'paywall-metered-modal-default',
						'name': 'modal metered paywall default',
						'creative': 'default',
						'position': 'automatico'
					}]
			}
		}
	})

	const buttons = document.getElementsByClassName('pw-paywall-metered-modal-btn-call-to-action')

	Array.from(buttons).forEach(el => {
		el.addEventListener('click', e => {
			e.preventDefault()

			dataLayer.push({
				'event': 'wallModal',
				'eventCategory': 'paywall',
				'eventAction': 'modal-click',
				'eventLabel': 'paywall-metered',
				'ecommerce': {
					'promoClick': {
						'promotions': [
							{
								'id': 'paywall-metered-modal-default',
								'name': 'modal metered paywall default',
								'creative': 'default',
								'position': 'automatico'
							}]
					}
				}
			})

			location.href = `${window.paywallConfig.paywallUrl}?limit=true`
		})
	})

}

window.pw_render_bottom_socket = () => {
	const user = paywall.auth.user()

	if (! paywallConfig.enableSocket) return false

	// Si el usuario tiene email de la empresa, no ejecuto esta acción
	if (paywall.auth.isLogged() && user.email.indexOf('@perfil.com') > -1) return 0

	if (!paywall.auth.isLogged() || !user.subscribed) {
		const last_display = Cookies.get('pw_bottom_socket_last_display', {domain: window.paywallConfig.cookieDomain})
		let show = false

		if (last_display !== undefined) {
			const periodicity = (!paywall.auth.isLogged())
				? paywallConfig.socketHoursPeriodicity || 3
				: paywallConfig.socketHoursPeriodicitySubs || 24
			const border_date = add(parseISO(last_display), {
				hours: periodicity
			})

			if (! compareAsc(border_date, new Date()))
				show = true
		} else
			show = true

		if (show)
			setTimeout(pw_show_bottom_socket, 45000)
	}
}

window.pw_show_bottom_socket = () => {
	const current_url = window.location.href
	const _container = document.getElementById('pw-content')

	_container.innerHTML += tmpl_bottom_socket({
		logged: paywall.auth.isLogged(),
		button_title: (paywall.auth.isLogged()) ? 'Suscribite' : 'Registrate',
		add_class: (paywall.auth.isLogged()) ? 'pw-color-invertido' : '',
	})

	const buttons = document.getElementsByClassName('pw-zocalo-btn-call-to-action')

	Array.from(buttons).forEach(el => {
		el.addEventListener('click', e => {
			e.preventDefault()
			let target = ''

			if (paywall.auth.isLogged()) {
				dataLayer.push({
					'event': 'wallBanner',
					'eventCategory': 'paywall',
					'eventAction': 'banner-click',
					'eventLabel': 'paywall',
					'ecommerce': {
						'promoClick': {
							'promotions': [
								{
									'id': 'bottom-banner',
									'name': 'bottom banner',
									'creative': 'default',
									'position': 'automatico'
								}]
						}
					}
				})
				target = `${window.paywallConfig.paywallUrl}?continue=${current_url}`
			} else {
				dataLayer.push({
					'event': 'wallBanner',
					'eventCategory': 'paywall',
					'eventAction': 'banner-click',
					'eventLabel': 'signwall',
					'ecommerce': {
						'promoClick': {
							'promotions': [
								{
									'id': 'bottom-banner',
									'name': 'bottom banner',
									'creative': 'default',
									'position': 'automatico'
								}]
						}
					}
				})
				target = `${window.paywallConfig.paywallUrl}id/register?continue=${current_url}`
			}

			Cookies.set('pw_bottom_socket_last_display_n', formatISO(new Date()), {domain: window.paywallConfig.cookieDomain})
			location.href = target
		})
	})

	document.getElementById('pw-zocalo-close').addEventListener('click', e => {
		e.preventDefault()

		const _socket = document.getElementById('pw-zocalo')
		_socket.classList.remove('open')
		_socket.classList.add('closed')
		Cookies.set('pw_bottom_socket_last_display', formatISO(new Date()), {domain: window.paywallConfig.cookieDomain})
	})
}

window.pw_render_login_menu = () => {
	const currentUrl = window.location.href
	const container = document.getElementById('paywall-login-container')

	container.innerHTML = tmpl_login_menu({
		user_logged: paywall.auth.isLogged(),
		paywall_url: paywallConfig.paywallUrl,
		current_url: currentUrl,
		user: paywall.auth.isLogged() ? paywall.auth.user() : '',
		unsubscribed: paywall.auth.isLogged() ? !paywall.auth.user().subscribed : true
	})
}

window.pw_show_signwall_modal = () => {
	const current_url = window.location.href
	const _container = document.getElementById('pw-content')

	_container.innerHTML = tmpl_signwall_modal({
		paywall_url: paywallConfig.paywallUrl,
		current_url: current_url,
	})

	// Analytics
	dataLayer.push({
		'event': 'wallModal',
		'eventCategory': 'paywall',
		'eventAction': 'modal-impresion',
		'eventLabel': 'signwall',
		'ecommerce': {
			'promoView': {
				'promotions': [
					{
						'id': 'sign-modal-default',
						'name': 'modal signwall default',
						'creative': 'default',
						'position': 'automatico'
					}]
			}
		}
	})

	document.getElementById('pw-btn-register').addEventListener('click', e => {
		e.preventDefault()

		dataLayer.push({
			'event': 'wallModal',
			'eventCategory': 'paywall',
			'eventAction': 'modal-click',
			'eventLabel': 'signwall',
			'ecommerce': {
				'promoClick': {
					'promotions': [
						{
							'id': 'sign-modal-default',
							'name': 'modal signwall default',
							'creative': 'default',
							'position': 'automatico'
						}]
				}
			}
		})

		location.href = `${window.paywallConfig.paywallUrl}id/register?continue=${current_url}`
	})
}

window.pw_show_middle_body_invitation = () => {
	const current_url = window.location.href
	const tmpl_message = document.getElementById('tmpl-middle-body-invitation').innerHTML
	const _container = $('#bodytext')

	const html = tmpl_middle_invitation({
		paywall_url: paywallConfig.paywallUrl,
		current_url,
		logged: paywall.auth.isLogged(),
		button_title: (paywall.auth.isLogged()) ? 'Suscribite' : 'Registrate'
	})

	$(rendered).insertBefore(_container)

	const buttons = document.getElementsByClassName('pw-middle-invitation-call-to-action')

	Array.from(buttons).forEach(el => {
		el.addEventListener('click', e => {
			e.preventDefault()

			if (paywall.auth.isLogged()) {
				dataLayer.push({
					'event': 'wallModal',
					'eventCategory': 'paywall',
					'eventAction': 'banner-click',
					'eventLabel': 'middle-body-subscription-invitation',
					'ecommerce': {
						'promoClick': {
							'promotions': [
								{
									'id': 'middle-body-invitation',
									'name': 'middle body invitation',
									'creative': 'default',
									'position': 'automatico'
								}]
						}
					}
				})
				location.href = `${window.paywallConfig.paywallUrl}?continue=${current_url}`
			} else {
				dataLayer.push({
					'event': 'wallModal',
					'eventCategory': 'paywall',
					'eventAction': 'banner-click',
					'eventLabel': 'middle-body-register-invitation',
					'ecommerce': {
						'promoClick': {
							'promotions': [
								{
									'id': 'middle-body-invitation',
									'name': 'middle body invitation',
									'creative': 'default',
									'position': 'automatico'
								}]
						}
					}
				})
				location.href = `${window.paywallConfig.paywallUrl}id/register?continue=${current_url}`
			}
		})
	})
}

window.pw_render_middle_invitation = () => {
	const user = paywall.auth.user()

	if ((!paywall.auth.isLogged() || !user.subscribed) && paywallConfig.type === 'metered')
		pw_show_middle_body_invitation()
}

window.send_fbq_pageView = () => {
	if (! fbq || ! window.paywallConfig.facebook_pixel) return 0
	const {facebook_pixel} = window.paywallConfig
	let facebook_pixel_options = {}

	if (paywall.auth.isLogged()) {
		const user = paywall.auth.user()
		facebook_pixel_options = {
			em: user.email,
			fn: user.first_name,
			ln: user.last_name,
			ph: user.phone_number
		}
	}

	fbq('init', facebook_pixel, facebook_pixel_options);
	fbq('track', 'PageView');
}

window.send_fbq_viewContent = () => {
	if (! fbq || ! window.paywallConfig.facebook_pixel || window.perfilContent.id === undefined) return 0
	const {id, title, paywall_type, canal, author, body_length, date} = window.perfilContent

	// User status
	let user_status = 'not registered'
	if (paywall.auth.isLogged()) {
		const user = paywall.auth.user()
		user_status = (user.subscribed) ? 'paid subscriber' : 'registered'
	}

	// Date
	const _date = parseISO(date)

	// Session counts
	const paywall_meter = Cookies.get('paywall_meter')
	const session_count_views = (paywall_meter) ? parseInt(paywall_meter) : 0

	const options = {
		content_ids: [id],
		content_type: 'product',
		content_name: title,
		content_paywall: paywall_type,
		content_category: canal,
		user_status,
		session_count_views,
		date: format(_date, 'yyyy-mm-dd'),
		hour: format(_date, 'HH:mm:ss'),
		author: author.fullname,
		format: 'article',
		length: body_length
	}

	fbq('track', 'ViewContent', options)
}

paywall.queue.push(['addEventListener', 'checked', () => {
	// Wyleex ID
	paywall.id.init();

	pw_render_login_menu();

	if (typeof(fbq) !== 'undefined') {
		send_fbq_pageView()
		send_fbq_viewContent()
	}

	pw_render_bottom_socket()

	//pw_render_middle_invitation()
}]);

paywall.queue.push(['addEventListener', 'loginwall', () => {
	pw_show_signwall_modal()
}])

paywall.queue.push(['addEventListener', 'paywall', () => {
	if (paywallConfig.type === 'premium')
		pw_show_premium_modal()
	else if (window.perfilContent !== undefined && window.perfilContent.show_metered_paywall)
		pw_show_metered_modal()

}])

;(function (d, s, e, t) {
	e = d.createElement(s);
	e.type = 'text/java' + s;
	e.defer = true;
	e.src = "https://libs.lavoz.com.ar/paywall/perfil/pw.js";
	t = d.getElementsByTagName(s)[0];
	t.parentNode.insertBefore(e, t);
})(document, 'script');
