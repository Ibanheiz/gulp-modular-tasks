module.exports = function (gulp, plugins, source, changed) {
  return function () {
    plugins.livereload.listen();

    source.forEach(function (watcher) {
      gulp.watch(watcher.file, [watcher.task]);
    });

    return gulp.watch(changed).on('change', function (file) {
      plugins.livereload.changed(file.path);
    });
  };
};