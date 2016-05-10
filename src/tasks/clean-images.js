/*
* Clean _assets folder
*/
module.exports = function (gulp, plugins, del) {
  return function () {
    del([ "dist/img/*"], { force: true });
  };
};
