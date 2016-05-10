'use strict';

/*
* Notes and plugins used
* Spliting tasks into seperate files: http://macr.ae/article/splitting-gulpfile-multiple-files.html
* [1] Loading plugins automatically: https://github.com/jackfranklin/gulp-load-plugins
*
*/

/*
* Plugin Requires
*/
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')(); // [1] Loads plugins automatically if they start with 'gulp-'
var rjs = require('gulp-requirejs');
var pngquant = require('imagemin-pngquant');
var merge = require('merge-stream');
var del = require('del');
var runSequence = require('run-sequence')
var htmlmin = require('gulp-htmlmin');
var extname = require('gulp-extname');
var assemble = require('assemble');
var app = assemble();

/*
* Tasks
*/
gulp.task('scripts', require('./src/tasks/scripts')(gulp, plugins, rjs));
gulp.task('styles', require('./src/tasks/styles')(gulp, plugins));
gulp.task('svg-sprite', require('./src/tasks/svg-sprite')(gulp, plugins, merge));
gulp.task('rasterize-svg', require('./src/tasks/rasterize-svg')(gulp, plugins, merge));
gulp.task('minify-images', require('./src/tasks/minify-images')(gulp, plugins, pngquant, merge));
gulp.task('copy-non-processed', require('./src/tasks/copy-non-processed')(gulp, plugins, merge));
gulp.task('clean', require('./src/tasks/clean')(gulp, plugins, del));
gulp.task('clean-images', require('./src/tasks/clean-images')(gulp, plugins, del));
gulp.task('assemble', require('./src/tasks/assemble')(gulp, plugins, app));

/*
* Combined Tasks
*/
gulp.task('images', function(cb){
  runSequence('clean-images', 'svg-sprite', 'rasterize-svg', 'minify-images', cb);
});

/*
* Watch Task
*/
gulp.task('dev', function() {
  gulp.watch('src/sass/**/*.scss',['styles']);
  gulp.watch('src/templates/**/*.hbs',['assemble']);
});

/*
*  Full build
*/
gulp.task('default', function(cb){
  runSequence('images', [ 'scripts', 'styles', 'copy-non-processed', 'assemble'], cb);
});

/*
*  Alias
*/
gulp.task('build', ['default']);
