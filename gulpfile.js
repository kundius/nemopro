const { src, dest, parallel, watch, series } = require('gulp')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const critical = require('critical')
const http = require('http')
const imagemin = require('gulp-imagemin')

// sass.compiler = require('gulp-dart-scss')

const config = {
    srcDir: './src/'
}

function fonts() {
  return src([
    config.srcDir + 'fonts/**/*',
    './node_modules/uikit/dist/fonts/**/*'
  ])
    .pipe(dest('dist/fonts'))
}

function images() {
  return src([
    config.srcDir + 'img/**/*'
  ])
    //.pipe(imagemin())
    .pipe(dest('dist/img'))
}

function css() {
  return src([
    './node_modules/slick-carousel/slick/slick.css',
    './node_modules/choices.js/public/assets/styles/choices.min.css',
    './node_modules/autocompleter/autocomplete.css',
    './node_modules/swiper/swiper-bundle.min.css',
    config.srcDir + 'css/mobilemenu.css',
    config.srcDir + 'scss/styles.scss'
  ])
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(dest('dist/css'))
}

function js() {
  return src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/swiper/swiper-bundle.min.js',
    './node_modules/jquery-migrate/dist/jquery-migrate.min.js',
    './node_modules/uikit/dist/js/uikit.min.js',
    './node_modules/uikit/dist/js/components/sticky.min.js',
    './node_modules/uikit/dist/js/components/notify.min.js',
    // './node_modules/uikit/dist/js/components/tooltip.min.js',
    // './node_modules/uikit/dist/js/components/slider.min.js',
    './node_modules/slick-carousel/slick/slick.min.js',
    './node_modules/choices.js/public/assets/scripts/choices.min.js',
    './node_modules/autocompleter/autocomplete.js',
    './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    './node_modules/jquery-form/dist/jquery.form.min.js',
    './node_modules/jquery-validation/dist/jquery.validate.min.js',
    './node_modules/jquery-validation/dist/localization/messages_ru.min.js',
    './node_modules/jquery.cookie/jquery.cookie.js',
    './node_modules/webfontloader/webfontloader.js',
    config.srcDir + 'js/flexmenu.min.js',
    config.srcDir + 'js/mobilemenu.js',
    config.srcDir + 'js/main.js'
  ])
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(concat('all.js'))
    .pipe(dest('dist/js'))
}

function modx(){
  return src([
    config.srcDir + 'js/ajaxform.js',
    config.srcDir + 'js/minishop2.js',
    config.srcDir + 'js/mslistorders.js',
    config.srcDir + 'js/tickets.js'
  ])
    .pipe(dest('dist/js'))
}

exports.fonts = fonts
exports.images = images
exports.js = js
exports.css = css
exports.modx = modx
exports.build = parallel(fonts, images, css, js, modx)
exports.default = function() {
  watch(config.srcDir + 'scss/**/*', css)
  watch(config.srcDir + 'css/**/*', css)
  watch(config.srcDir + 'js/**/*', js)
  watch(config.srcDir + 'fonts/**/*', fonts)
  watch(config.srcDir + 'img/**/*', images)
}
