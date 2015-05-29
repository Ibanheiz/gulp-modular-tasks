module.exports = function (gulp, plugins, source, output) {
  return function () {
    return gulp.src(source)
            .pipe(plugins.rename({dirname: ''}))
            .pipe(gulp.dest(output));
  };
};