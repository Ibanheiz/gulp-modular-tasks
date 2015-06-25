module.exports = function (gulp, plugins, source, fileName, output) {
  return function () {
    return gulp.src(source)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat(fileName))
            .pipe(plugins.sourcemaps.write( '.' ))
            .pipe(gulp.dest(output));
  };
};