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

mix.sass('resources/assets/sass/home-high.scss', 'public/css')
	.sass('resources/assets/sass/home-low.scss', 'public/css')
	.sass('resources/assets/sass/home-responsive.scss', 'public/css')
	.sass('resources/assets/sass/news-high.scss', 'public/css')
	.sass('resources/assets/sass/news-low.scss', 'public/css')
	.sass('resources/assets/sass/news-responsive.scss', 'public/css')
	.sass('resources/assets/sass/channels-high.scss', 'public/css')
	.sass('resources/assets/sass/channels-low.scss', 'public/css')
	.sass('resources/assets/sass/channels-responsive.scss', 'public/css')
	.sass('resources/assets/sass/pages.scss', 'public/css')

	// REPERFILAR
	.sass('resources/assets/sass/reperfilar/reperfilar-home-high.scss', 'public/css')
	.sass('resources/assets/sass/reperfilar/reperfilar-home-low.scss', 'public/css')
	.sass('resources/assets/sass/reperfilar/reperfilar-home-responsive.scss', 'public/css')
	.sass('resources/assets/sass/reperfilar/reperfilar-channels-high.scss', 'public/css')
	.sass('resources/assets/sass/reperfilar/reperfilar-channels-low.scss', 'public/css')
	.sass('resources/assets/sass/reperfilar/reperfilar-channels-responsive.scss', 'public/css')
	.sass('resources/assets/sass/reperfilar/reperfilar-news-high.scss', 'public/css')
	.sass('resources/assets/sass/reperfilar/reperfilar-news-low.scss', 'public/css')
	.sass('resources/assets/sass/reperfilar/reperfilar-news-responsive.scss', 'public/css')

mix.js('resources/assets/js/channels-show.js', 'public/js')
	.js('resources/assets/js/home.js', 'public/js')
	.js('resources/assets/js/news-show.js', 'public/js')
	.js('resources/assets/js/eplanning.js', 'public/js')
	.js('resources/assets/js/mi-perfil/mi-perfil.js', 'public/js')

mix.version([
	'public/css/home-high.css',
	'public/css/home-low.css',
	'public/css/home-responsive.css',
	'public/css/news-high.css',
	'public/css/news-low.css',
	'public/css/news-responsive.css',
	'public/css/channels-high.css',
	'public/css/channels-low.css',
	'public/css/channels-responsive.css',
	'public/css/pages.css',
	'public/css/reperfilar-home-high.css',
	'public/css/reperfilar-home-low.css',
	'public/css/reperfilar-home-responsive.css',
	'public/css/reperfilar-channels-high.css',
	'public/css/reperfilar-channels-low.css',
	'public/css/reperfilar-channels-responsive.css',
	'public/css/reperfilar-news-high.css',
	'public/css/reperfilar-news-low.css',
	'public/css/reperfilar-news-responsive.css',
	'public/js/channels-show.js',
	'public/js/home.js',
	'public/js/news-show.js',
	'public/js/eplanning.js',
	'public/js/mi-perfil.js'
])
