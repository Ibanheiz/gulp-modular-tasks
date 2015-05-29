module.exports = function (gulp, plugins, source) {
  return function () {
    return plugins.livereload.listen();
             gulp.watch(source).on('change', function (file) {
               plugins.livereload.changed(file.path);
             });
  };
};