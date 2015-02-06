"use strict";

var gulp = require('gulp');
var to5 = require('gulp-6to5');
var jshint = require('gulp-jshint');

gulp.task('default', function () {
  return gulp.src('src/**/*.js')
    .pipe(to5())
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.watch('lint', function() {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['lint']);
});
