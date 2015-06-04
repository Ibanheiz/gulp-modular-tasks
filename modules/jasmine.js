module.exports = function (gulp, plugins, source) {
  return function () {
    return gulp.src(source)
            .pipe(plugins.jasmine());
  };
};