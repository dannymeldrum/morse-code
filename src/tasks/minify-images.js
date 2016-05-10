/*
* SCSS -> (Compile, Autoprefix, Minify ) -> CSS
*/
module.exports = function (gulp, plugins, pngquant, merge) {
  return function () {

    // Copy Fonts stream
    var minifyRaster = gulp.src( 'src/img/raster/**/*')
       .pipe(plugins.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img/raster/'))


    // Copy videos stream
    var minifySprite = gulp.src( 'dist/img/sprite/*.png')
       .pipe(plugins.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img/sprite/'))



    return merge(minifyRaster, minifySprite);

  }
};
