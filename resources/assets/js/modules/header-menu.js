const handleToggleReperfilarMenu = () => {
	const _button = document.getElementById('btn-toggle-menu-reperfilar')
	const _container = document.getElementById('reperfilar-nav')

	if (_button === null) return 0

	_button.addEventListener('click', e => {
		e.preventDefault()

		_button.classList.toggle('change')
		_container.classList.toggle('temuestro');
	})
}

const handleToggleMainMenu = () => {
	const _button = document.getElementById('hamburguesa')
	const _container = document.getElementById('menues')

	if (_button === null) return 0

	_button.addEventListener('click', e => {
		e.preventDefault()

		_button.classList.toggle('change')
		_container.classList.toggle('temuestro')
	})
}

export default function () {
	handleToggleReperfilarMenu()
	handleToggleMainMenu()
}

