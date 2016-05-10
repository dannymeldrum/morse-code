/*
* SVGs -> (sprite) -> sprite.svg
* sprite.svg -> (rasterize, minify) -> sprite.png
*/
module.exports = function (gulp, plugins, pngquant, merge) {

  return function () {

    gulp.src('**/sprite-*.svg', {
          cwd : 'src/img/svg/'
        })
        .pipe(plugins.svgSprite({
          shape : {
            id : {
              dimension : {
                precision   : 2,
                attributes  : false,
              },
              spacing : {
                padding     : 10,
              },
            }
          },
          mode : {
            css : {
              dest: 'dist/css/',
              sprite : '../img/sprite/sprite.svg',
              prefix: '.',
              bust : false,
              render: {
                scss: {
                  dest: '../../src/sass/maps/_svg-sprite.scss',
                  template: 'src/sass/maps/_svg-sprite-template.scss',
                }
              }
            }
          },

       

          variables : {
            // Custom variables we use in our svg-sprite-template.scss
            png : function() {
              return function(sprite, render) {
                return render(sprite).split('.svg').join('.png');
              }
            },
            correctPosition: function() {
              return function(backgroundPosition, render) {
                var backgroundPosition = render(backgroundPosition);
                var padding = 10;
                return parseFloat(backgroundPosition - padding)+ "px";
              }
            }
          }
        }))
        .pipe(gulp.dest('.'))
  }

};
