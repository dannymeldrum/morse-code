/*
* JS -> (Require & Uglify) -> JS
*/
module.exports = function (gulp, plugins, rjs) {
  return function () {
        rjs({
    		name: 'main',
        baseUrl: 'src/js/',
        out: 'all.js',
        include: ['libs/require', 'main'],
        mainConfigFile: 'src/js/' + 'main.js',
        shim: {
            // standard require.js shim options 
        },
    })
    .pipe(gulp.dest('dist/js'))
    .pipe(plugins.uglify())
    .pipe(plugins.rename('all.min.js'))
    .pipe(gulp.dest('dist/js'));
  };
};