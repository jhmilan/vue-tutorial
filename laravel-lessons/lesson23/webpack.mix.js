const { mix } = require('laravel-mix');

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

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
   .version()
   .extract(['jquery', 'axios', 'vue']);

/* 1 ouptup file

mix.js(['resources/assets/js/app.js', 'resources/assets/js/more.js'], 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
*/

/* 2 output files
mix.js('resources/assets/js/app.js', 'public/js')
   .js('resources/assets/js/more.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
*/