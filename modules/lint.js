module.exports = function (gulp, plugins, source) {
  return function () {
    return gulp.src(source)
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('default'));
  };
};