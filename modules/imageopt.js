module.exports = function (gulp, plugins, source, output) {
  return function () {
    return gulp.src(source)
            .pipe(plugins.imagemin({
              optimizationLevel: 5,
              progressive: true
            }))
            .pipe(gulp.dest(output));
  };
};