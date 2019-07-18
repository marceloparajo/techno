let my_tracker = null

export function initAnalytics() {
	const path_name = $('meta[name="analytics-path-name"]').attr('content')
	const client_id = $('meta[name="analytics-client-id"]').attr('content')
	const view = $('meta[name="analytics-view"]').attr('content')
	const data = $('meta[name="analytics-data"]').attr('content')

	// Location
	let location = path_name + window.location.pathname
	location = location.replace('//', '/')
	const content = (data !== '') ? JSON.parse(data) : {}

	ga('create', client_id, 'auto', { allowLinker: true, 'useAmpClientId': true })
	ga('require', 'linker')
	ga('linker:autoLink', ['batimes.com.ar', 'fortunaweb.com.ar', 'lunateen.com.ar'])
	ga('set', 'page', location)
	ga(tracker => { my_tracker = tracker })

	ga('set', 'dimension2', content['section'])

	switch (view.trim()) {
		case 'news.show':
			ga('set', 'dimension1', content['slug'])
			ga('set', 'dimension3', content['author'])
			ga('set', 'dimension4', content['date'])
			ga('set', 'dimension5', content['id'])
			break

		case 'channels.show':
			ga('set', 'dimension1', content['channel'])
			break

		case 'authors.show':
			ga('set', 'dimension1', content['author_username'])
			ga('set', 'dimension3', content['author_name'])
			break

		case 'tags.show':
			ga('set', 'dimension1', content['tag'])
			break

		case 'home.index':
			ga('set', 'dimension1', 'home');
			break

		default:
			ga('set', 'dimension1', view.trim());

	}

	ga('send', 'pageview')
}

export function sendHitGalleryAnalytics(indexGallery) {
	my_tracker.set('dimension6', indexGallery)
	my_tracker.send('pageview')
}