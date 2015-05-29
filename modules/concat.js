module.exports = function (gulp, plugins, source, fileName, output) {
  return function () {
    return gulp.src(source)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat(fileName))
            .pipe(gulp.dest(output));
  };
};