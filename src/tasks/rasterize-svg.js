/*
* SVGs -> (Rasterize) -> PNGS
*/
module.exports = function (gulp, plugins, merge) {
  return function () {

  // Copy Fonts stream
  var rasterizeSVG = gulp.src(['src/img/svg/**/*.svg'])
      .pipe(plugins.raster())
      .pipe(plugins.rename({extname: '.png'}))
      .pipe(gulp.dest('dist/img/png'));

      rasterizeSVG.on('end', function(){
        var rasterizeSVGSprite =   gulp.src('dist/img/sprite/sprite.svg')
            .pipe(plugins.raster())
            .pipe(plugins.rename({extname: '.png'}))
            .pipe(gulp.dest('dist/img/sprite/'))


        return merge(rasterizeSVG, rasterizeSVGSprite);
      })

  };
};
