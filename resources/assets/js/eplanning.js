import { isElementVisible } from './modules/utils'

const epl_initialize = async () => {
	const sec = document.querySelector('meta[name="ads-sec"]').getAttribute('content')
	const client = document.querySelector('meta[name="ads-client"]').getAttribute('content')

	const res_initServer = await initServer(client, sec)
	if (res_initServer) {
		const res_setSpaces = await setSpaces()

		if (res_setSpaces)
			showSpaces()
	}
}

const initServer = (client, sec) => {
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

const setSpaces = () => {
	let spaces = {}
	let s = []

	const elements = document.getElementsByClassName('ads-space')

	Array.from(elements).forEach(el => {
		let id = el.getAttribute('data-id')
		let num = 1

		if (id in spaces) {
			num = spaces[id]
			num++
		}
		else
			num = 1

		spaces[id] = num

		id = id.replace('-pos-', num)

		el.setAttribute('data-id', id)
		el.setAttribute('id', `eplAdDiv${id}`)

		const item = { e: el.getAttribute('data-id'), w: el.getAttribute('w'), h: el.getAttribute('h') }
		s.push(item)
	})

	const eIs = [];
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

const showSpaces = () => {
	const elements = document.getElementsByClassName('ads-space')

	Array.from(elements).forEach(el => {
		if (isElementVisible(el)) {
			document.epl.loadAdM(el.getAttribute('data-id'))
		}
	})
}

const script = document.createElement('script')
script.type = 'text/javascript'
script.src = 'https://us.img.e-planning.net/layers/epl-41.js'
script.defer = true
const firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(script, firstScriptTag)

script.addEventListener('load', () => {
	epl_initialize()
})
