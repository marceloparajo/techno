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

mix.webpackConfig({
	module: {
		rules: [
			{
				test: /\.mustache$/,
				loader: 'mustache-loader?minify'
			}
		]
	}
})

mix.sass('resources/assets/sass/home.scss', 'public/css')
	.sass('resources/assets/sass/home-responsive.scss', 'public/css')
	.sass('resources/assets/sass/general.scss', 'public/css')
	.sass('resources/assets/sass/news.scss', 'public/css')
	.sass('resources/assets/sass/news-responsive.scss', 'public/css')
	.sass('resources/assets/sass/channels.scss', 'public/css')
	.sass('resources/assets/sass/channels-responsive.scss', 'public/css')

mix.js('resources/assets/js/channels-show.js', 'public/js')
	.js('resources/assets/js/home.js', 'public/js')
	.js('resources/assets/js/news-show.js', 'public/js')
	.js('resources/assets/js/eplanning.js', 'public/js')
	.js('resources/assets/js/mi-perfil/mi-perfil.js', 'public/js')

mix.version([
	'public/css/home.css',
	'public/css/home-responsive.css',
	'public/css/general.css',
	'public/css/general-responsive.css',
	'public/css/news.css',
	'public/css/news-responsive.css',
	'public/css/channels.css',
	'public/css/channels-responsive.css',
	'public/js/channels-show.js',
	'public/js/home.js',
	'public/js/news-show.js',
	'public/js/eplanning.js',
	'public/js/mi-perfil.js'
])
