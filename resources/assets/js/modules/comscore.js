export function initComscore() {
	const client_id = $('meta[name="comscore-client-id"]').attr('content')

	const _comscore = _comscore || [];
	_comscore.push({ c1: "2", c2: client_id });
}