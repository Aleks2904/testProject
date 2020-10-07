var gulp         = require('gulp'), // Подключаем Gulp
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    uglify       = require('gulp-uglify-es').default, // Подключаем gulp-uglifyjs (для сжатия JS)
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    cheerio      = require('gulp-cheerio'), // удаляет в свг стандартные стили котоыре мешают его стилизовать
    replace      = require('gulp-replace'), // исправление косяков от cheerio
    svgSprite    = require('gulp-svg-sprite'), //собирает все свг в 1 спрайт ( у него очень большой функционал, почитать api)
   // svgMin       = require('gulp-svgmin'),  //минификация свг
    csso         = require('gulp-csso'), //минификация css
    sassInlineSvg = require('gulp-sass-inline-svg'),
    svgmin        = require('gulp-svgmin'),
    sourcemap     = require('gulp-sourcemaps'),

    browserSync   = require('browser-sync').create();

const jsFiles = [ 
    'app/js/jquery-3.5.1.min.js',
    'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
    'node_modules/jquery-validation/dist/jquery.validate.min.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.min.js',
    //'app/js/slick.min.js',
        //header
    'app/js/modal-menu.js',                         //модалка меню
    'app/js/jq-form-styler.js',                    //селект
        //cекция approaching
    'app/js/btn-activ.js',                        //кнопки

    'app/js/section1-slider-content.js',         //слайдер-контент
        // секция popular-tours
    'app/js/section2-slider-content.js',       //слайдер-контент

        //слайдеры
    'app/js/my-slider.js',                  //подключение и настройка слайдеров

        // cекция claim
    'app/js/modal-consent.js',             //модалка на согласия
    'app/js/jq-mask.js',                  //маска
    'app/js/jq-validate.js',             //валидатор
]

const cssFiles = [
    'app/css/libs/normalize.css',
    'app/css/fonts.css',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
    'app/scss/main.scss'
]

function styles() {
	return     gulp.src(cssFiles) // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(concat('all.css'))
        .pipe(csso({
            restructure: true,
            sourceMap: false,
            debug: false
        }))
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.stream());
}


function scripts() {
    return gulp.src(jsFiles)
        .pipe(sourcemap.init())
		.pipe(concat('all.js'))
		.pipe(uglify({
			toplevel: true,
        }))
        .pipe(sourcemap.write())
		.pipe(gulp.dest('./app/js'))
		.pipe(browserSync.stream());
}

function img() {
    return gulp.src(['app/img/**/*', '!app/img/**/*.svg']) // Берем все изображения из app
        .pipe(cache(imagemin({ // С кешированием
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'))
}

// function svg() {
//     return gulp.src('app/img/svg/**/*') 
//     .pipe(svgMin({
//         js2svg: {
//             pretty: true
//         }
//     }))

//     .pipe(cheerio({
//         run: function($) {
//            $('[fill]').removeAttr('fill'); 
//            $('[stroke]').removeAttr('stroke'); 
//            $('[style]').removeAttr('style'); 
//         },
//         parserOptions: {xmlMode: true}
//     }))

//     .pipe(replace('&gt;', '>'))
    
//     .pipe(svgSprite({
//         mode:{
//             symbol: {
//                 sprite: "sprite.svg"
//             }
//         }
//     }))
//     .pipe(gulp.dest('app/img')) 
// }

gulp.task('svg', function(){
    return gulp.src('app/img/svg/**/*.svg') 
      .pipe(svgmin()) // Recommend using svg min to optimize svg files first
      .pipe(sassInlineSvg({
        destDir: 'app/scss'
      }));
});

function watch() {

	browserSync.init({
		server: {
			baseDir: "./app"
		},
		tunnel: false,
	});

    gulp.watch('./app/scss/**/*.scss', styles);
    gulp.watch('./app/css/**/*.css', concat);
    gulp.watch(['./app/js/**/*.js', '!./app/js/all.js'], scripts);
	gulp.watch('app/**/*.html').on('change', browserSync.reload);
}

function clean() {
	return del(['dist'])
}

gulp.task('prebuild', async function() {
    var buildCss = gulp.src('app/css/all.css') // Переносим библиотеки в продакшен
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/all.js')    // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js/'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));

    var buildPHP = gulp.src('app/php/**/*')
    .pipe(gulp.dest('dist/php'))

    var buildSvg = gulp.src('app/img/symbol/sprite.svg') // Переносим img в продакшен
    .pipe(gulp.dest('dist/img/symbol'));
});

gulp.task('styles', styles);
gulp.task('img', img);
gulp.task('watch', watch);

gulp.task('default', gulp.series(clean, gulp.parallel(styles, scripts, 'svg'), 'watch'));
gulp.task('build', gulp.series(clean, img, styles, scripts, 'svg', 'prebuild'));