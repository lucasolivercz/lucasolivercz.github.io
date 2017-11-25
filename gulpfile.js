/**
 * Created by dijalmasilva on 01/06/17.
 */
var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");

var scssFiles = "/sass/*.scss";
var cssDest = "/css";

var sassDevOptions = {
    outputStyle: 'expanded'
};

var sassProdOptions = {
    outputStyle: 'compressed'
};

gulp.task('sassdev', function () {
    return gulp.src(scssFiles)
        .pipe(sass(sassDevOptions).on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('sassprod', function() {
    return gulp.src(scssFiles)
        .pipe(sass(sassProdOptions).on('error', sass.logError))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function () {
    gulp.watch(scssFiles, ['sassprod']);
});

gulp.task('default', ['sassprod']);
