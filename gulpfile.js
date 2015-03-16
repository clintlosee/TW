var gulp = require('gulp');
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var $ = require('gulp-load-plugins')({lazy: true});

//********* Gulp-Load-Plugins takes the place and loads these
//var jshint = require('gulp-jshint');
//var jscs = require('gulp-jscs');
//var util = require('gulp-util');
//var gulpprint = require('gulp-print');
//var gulpif = require('gulp-if');

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

/////////////

function startBrowserSync() {
    if(browserSync.active) {
        return;
    }
    
    log('Starting browser-sync');
    
    var options = {
        server: {
            baseDir: "./"   
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
