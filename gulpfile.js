"use strict";

var gulp = require('gulp');
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var csso = require('gulp-csso');
var del = require('del');

var $ = require('gulp-load-plugins')({lazy: true});

//********* Gulp-Load-Plugins takes the place and loads these
//var jshint = require('gulp-jshint');
//var jscs = require('gulp-jscs');
//var util = require('gulp-util');
//var gulpprint = require('gulp-print');
//var gulpif = require('gulp-if');

gulp.task('cssmin', function() {
    return gulp
       .src([
            './css/*.css'
        ])
        .pipe($.csso())
        .pipe($.rename('style.min.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('jsuglify', function() {
    return gulp
        .src('./js/*.js')
        .pipe($.uglify())
        .pipe($.rename('script.min.js'))
        .pipe(gulp.dest('./js'));
});

gulp.task('optimize', ['cssmin', 'jsuglify'], function() {
    log('Optimizing the JS and CSS');
});

gulp.task('vet', function () {
    log('Analyzing source with JSHint and JSCS');
    return gulp
        .src([
            './js/*.js',
            './*.js'
        ])
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('serve', function() {
    startBrowserSync();

    gulp.watch('css/*.css').on('change', reload);
    gulp.watch('./**/*.html').on('change', reload);
});

gulp.task('clean', function() {
    return del(['build', 'css/style.min.css', 'js/script.min.js']);
});

gulp.task('build', ['clean', 'optimize'], function() {
    return gulp
        .src([
            './index.html',
            './favicon.ico',
            './robots.txt',
            './sitemap.xml',
            './services/**',
            './js/**',
            './js/script.js',
            './img/**',
            './flash/**',
            './css/**',
            './css/style.css',
            './contacts/**',
            './about/**',
            './tools/**'
        ], {base: './'})
        .pipe(gulp.dest('./build'))
});

/////////////

function startBrowserSync() {
    if (browserSync.active) {
        return;
    }

    log('Starting browser-sync');

    var options = {
        server: {
            baseDir: './'
        }
    };

    browserSync(options);
}

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
