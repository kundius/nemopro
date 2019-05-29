const gulp = require('gulp')
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

const config = {
    srcDir: './src/',
    stylePattern: '/**/*.+(scss|css)',
    jsPattern: '/**/*.js'
}

function fontsTask() {
  return gulp.src([
    './node_modules/uikit/dist/fonts/**/*'
  ])
    .pipe(gulp.dest('dist/fonts'))
}

function imagesTask() {
  return gulp.src([
    config.srcDir + 'img/**/*'
  ])
    .pipe(sourcemaps.init())
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
}

function scssTask() {
  return gulp.src([
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
    .pipe(gulp.dest('dist/css'))
}

function jsTask(){
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/jquery-migrate/dist/jquery-migrate.min.js',
    './node_modules/uikit/dist/js/uikit.min.js',
    './node_modules/uikit/dist/js/components/sticky.min.js',
    './node_modules/uikit/dist/js/components/notify.min.js',
    // './node_modules/uikit/dist/js/components/tooltip.min.js',
    // './node_modules/uikit/dist/js/components/slider.min.js',
    './node_modules/slick-carousel/slick/slick.min.js',
    './node_modules/jquery-lazy/jquery.lazy.min.js',
    './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    './node_modules/jquery-form/dist/jquery.form.min.js',
    './node_modules/jquery-validation/dist/jquery.validate.min.js',
    './node_modules/jquery-validation/dist/localization/messages_ru.min.js',
    './node_modules/jquery.cookie/jquery.cookie.js',
    config.srcDir + 'js/flexmenu.min.js',
    config.srcDir + 'js/mobilemenu.js',
    config.srcDir + 'js/main.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
}

function modxTask(){
  return gulp.src([
    config.srcDir + 'js/ajaxform.js',
    config.srcDir + 'js/minishop2.js',
    config.srcDir + 'js/mslistorders.js'
  ])
    .pipe(gulp.dest('dist/js'))
}

function criticalTask(cb){
  http.get('http://nemopro.ru/?critical=1', onGotData)
  function onGotData(res) {
    const chunks = [];
    res.on('data', onGotData)
    res.on('end', onEnd)
    function onGotData(chunk) {
      chunks.push(chunk)
    }
    function onEnd() {
      critical.generate({
        base: 'dist/',
        rebase: {
          from: "dist/all.css",
          to: "dist/all.css"
        },
        target: { css: 'css/critical.css', uncritical: 'css/uncritical.css' },
        html: chunks.join(''),
        css: ['dist/css/all.css'],
        width: 480,
        height: 480
      }, cb);
    }
  }
}

function watchTask(){
  gulp.watch(
    [config.stylePattern, config.jsPattern],
    gulp.parallel(scssTask, jsTask)
  )
}

exports.default = gulp.series(gulp.parallel(imagesTask, fontsTask, scssTask, jsTask, modxTask), criticalTask/*, watchTask*/)
