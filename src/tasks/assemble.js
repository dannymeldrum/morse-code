/*
* .HBS -> (Assemble) -> .HTML
*/
module.exports = function (gulp, plugins, app) {
  return function () {

    app.partials('src/templates/partials/**/*.hbs');
    app.layouts('src/templates/layouts/*.hbs');
    app.pages('src/templates/pages/*.hbs');

    app.toStream('pages')
      .pipe(app.renderFile())
      .pipe(plugins.htmlmin())
      .pipe(plugins.extname())
      .pipe(app.dest('dist/templates/'));

  };
};