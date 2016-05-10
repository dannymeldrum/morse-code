/*
* SCSS -> (Compile, autoprefix, nano ) -> CSS
*/
module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('src/sass/style.scss')
    .pipe(plugins.sass()
          .on('error', plugins.sass.logError)
    )
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(plugins.cssnano({
      'safe':true,
      'autoprefixer': false
    }))
    .pipe(plugins.rename('style.min.css'))
    .pipe(gulp.dest('dist/css'))
  };
};
