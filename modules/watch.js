module.exports = function (gulp, plugins, source) {
  return function () {
    plugins.livereload.listen();
    return gulp.watch(source).on('change', function (file) {
      plugins.livereload.changed(file.path);
    });
  };
};