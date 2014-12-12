var config = require('./config.json');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var mincss = require('gulp-minify-css');
var watch = require('gulp-watch');

gulp.task('default',['scripts', 'less', 'html']);

gulp.task('watch', function() {
    watch(config.watchFiles, function () {
        gulp.start('default');
    });
});


gulp.task('scripts', function() {
    gulp.src(config.jsFiles)
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('httpServ/public/js'))
});


gulp.task('less', function() {
    gulp.src(config.lessFiles)
        .pipe(less())
        .pipe(concat('bundle.css'))
        .pipe(mincss())
        .pipe(gulp.dest('httpServ/public/css'))
});


gulp.task('html', function() {
    var keys = Object.keys(config.htmlFiles);
    for(var i=0; i<keys.length; i++) {
        gulp.src(config.htmlFiles[keys[i]])
            .pipe(concat(keys[i]))
            .pipe(gulp.dest('./httpServ/public'));
    }

});