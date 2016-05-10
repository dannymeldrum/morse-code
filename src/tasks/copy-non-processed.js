/*
* SVGs -> (sprite) -> sprite.svg
* sprite.svg -> (rasterize, minify) -> sprite.png
*/
module.exports = function (gulp, plugins, merge) {

  return function () {

    // Copy Fonts stream
    var copyFonts = gulp.src( 'src/fonts/**/*.{ttf,woff,eot,svg}')
       .pipe(gulp.dest('dist/fonts/'))

    // Copy Svgs
    var copySVG =  gulp.src('src/img/svg/**/*.svg')
      .pipe(gulp.dest('dist/img/svg'))

    // Copy Svgs
    var copyJs =  gulp.src(['src/js/libs/modernizr.custom.js'])
      .pipe(gulp.dest('dist/js'))

    return merge(copyFonts, copySVG, copyJs);

  }

};
