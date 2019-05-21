var gulp = require('gulp')
var babel = require('gulp-babel')
var sourcemaps = require('gulp-sourcemaps')
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

const config = {
    srcDir: './src/',
    stylePattern: '/**/*.+(scss|css)',
    jsPattern: '/**/*.js'
}

function scssTask() {
    return gulp.src([
      './node_modules/uikit/dist/css/uikit.gradient.min.css',
      './node_modules/uikit/dist/css/components/sticky.gradient.min.css',
      './node_modules/uikit/dist/css/components/notify.gradient.min.css',
      './node_modules/uikit/dist/css/components/tooltip.gradient.min.css',
      './node_modules/uikit/dist/css/components/slider.gradient.min.css',
      './node_modules/slick-carousel/slick/slick.css',
      './node_modules/magnific-popup/dist/magnific-popup.css',
      config.srcDir + 'css/mobilemenu.css',
      config.srcDir + 'scss/styles.scss'
    ])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('all.css'))
        .pipe(postcss([ autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
}

function jsTask(){
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/uikit/dist/js/uikit.min.js',
    './node_modules/uikit/dist/js/components/sticky.min.js',
    './node_modules/uikit/dist/js/components/notify.min.js',
    './node_modules/uikit/dist/js/components/tooltip.min.js',
    './node_modules/uikit/dist/js/components/slider.min.js',
    './node_modules/slick-carousel/slick/slick.min.js',
    './node_modules/jquery-lazy/jquery.lazy.min.js',
    './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    './node_modules/jquery-form/dist/jquery.form.min.js',
    './node_modules/jquery-validation/dist/jquery.validate.min.js',
    './node_modules/jquery-validation/dist/localization/messages_ru.min.js',
    './node_modules/jquery.cookie/jquery.cookie.js',
    config.srcDir + 'js/flexmenu.min.js',
    config.srcDir + 'js/minishop2.callbacks.js',
    config.srcDir + 'js/mobilemenu.js',
    config.srcDir + 'js/main.js'
  ])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
}

function modxTask(){
  return gulp.src([
    config.srcDir + 'js/ajaxform.js',
    config.srcDir + 'js/minishop2.js',
    config.srcDir + 'js/mslistorders.js'
  ])
    .pipe(gulp.dest('dist'))
}

function watchTask(){
    gulp.watch(
        [config.stylePattern, config.jsPattern],
        gulp.parallel(scssTask, jsTask)
    )
}

exports.default = gulp.series(gulp.parallel(scssTask, jsTask, modxTask)/*, watchTask*/)
