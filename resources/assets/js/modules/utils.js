export const isElementVisible = el => {
	const style = window.getComputedStyle(el);
	return (style.display !== 'none')
}
