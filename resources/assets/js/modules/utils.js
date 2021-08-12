export const isElementVisible = el => {
	const style = window.getComputedStyle(el);
	return (style.display !== 'none')
}

export const simulateClick = el => {
	const evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	})

	const canceled = !el.dispatchEvent(evt);
};