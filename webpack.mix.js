let mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/assets/sass/app.scss', 'public/css')
	.js('resources/assets/js/channels-show.js', 'public/js')
	.js('resources/assets/js/home.js', 'public/js')
	.js('resources/assets/js/news-show.js', 'public/js')
	.js('resources/assets/js/vendors/epl-41.js', 'public/js')

mix.version([
	'public/css/app.css',
	'public/js/channels-show.js',
	'public/js/home.js',
	'public/js/news-show.js',

	// Vendors
	'public/js/epl-41.js'
])
