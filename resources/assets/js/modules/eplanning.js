/**
 * Inicializo modulo
 *
 * @returns {Promise<void>}
 */
async function init() {
	const show_ads = $('meta[name="ads-load"]').attr('content')
	const sec = $('meta[name="ads-sec"]').attr('content')
	const client = $('meta[name="ads-client"]').attr('content')

	if (show_ads) {
			const res_initServer = await initServer(client, sec)

			if (res_initServer) {
				const res_setSpaces = await setSpaces()

				if (res_setSpaces)
					showSpaces()

				handleResizeWindowEvent()
				handleReloadAds()
			}

	} else console.log('Ads deshabilitados')
}



/**
 * Inicializo servidor de ePlanning
 *
 * @param client
 * @param sec
 * @returns {*}
 */
function initServer(client, sec) {
	const protocol = window.location.protocol
	const args = {
		iIF: 1,
		sV: `${protocol}//ads.us.e-planning.net/` ,
		vV: "4",
		sI: client,
		sec: sec,
	}

	if (document.epl) {
		const e = document.epl
		if (!e.eplReady()) e.eplInit(args)
		return e.eplReady()
	} else {
		return false
	}
}

/**
 * Busca todos los elementos de la página con la clase .ads-space y construye el arreglo para ser enviado a ePlanning
 *
 * @returns {boolean}
 */
function setSpaces() {
	let spaces = {}
	let s = []

	$('.ads-space').each((index, el) => {
		const field = $(el)
		let id = field.data('id')
		let num = 1

		if (id in spaces) {
			num = spaces[id]
			num++
		}
		else
			num = 1

		spaces[id] = num

		id = id.replace('-pos-', num)

		field.attr('data-id', id)
		field.attr('id', 'eplAdDiv' + id)

		const item = { e: field.attr('data-id'), w: field.data('w'), h: field.data('h') }
		s.push(item)
	})

	let eIs = [];
	for (let i = 0; i < s.length; i++) {
		if ('string' === typeof(s[i])) {
			eIs.push(s[i]);
		} else if (s[i].e) {
			let e = s[i].e + (s[i].ma ? (':'+s[i].ma + (s[i].f ? '_'+s[i].f : '')) : '');
			if ((s[i].w && s[i].h) || (s[i].s)) {
				e += '!';
				e += (s[i].w && s[i].h) ? (s[i].w.toString(36).toUpperCase()+'x'+s[i].h.toString(36).toUpperCase()) : '';
				e += s[i].s ? 's' : '';
			}
			eIs.push(e);
		}
	}
	document.epl.addSpaces(eIs);

	return true
}

/**
 * Muestra los ads que se encuentran visibles y no fueron cargados antes
 */
function showSpaces() {
	$('.ads-space').each((index, el) => {
		const field = $(el)
		if (field.is(':visible') && field.data('loaded') === false) {
			document.epl.loadAdM(field.attr('data-id'))
			field.attr('data-loaded', 'true')
		}
	})
}

function reloadAds() {
	$('.ads-space').each((index, el) => {
		const field = $(el)
		const id = field.attr('data-id')
		const loaded = field.attr('data-loaded') === 'true'
		const reload = field.attr('data-reload') === 'true'

		if (field.is(':visible') && loaded && reload) {
			document.epl.reloadSpace(id)
		}
	})
}

/**
 * Observa si el navegador tiene resize para volver a cargar espacios no cargados previamente
 */
function handleResizeWindowEvent() {
	$(window).resize(showSpaces)
}

function handleReloadAds() {
	setInterval(reloadAds, 59000)
}

export default {
	init: init
}