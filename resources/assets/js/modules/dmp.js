export function initDmp() {
	const client_id = $('meta[name="dmp-client-id"]').attr('content')

	let cX = cX || {}
	cX.callQueue = cX.callQueue || []
	cX.callQueue.push(['setSiteId', client_id]);
	cX.callQueue.push(['sendPageViewEvent']);
}