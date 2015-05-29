module.exports = function (gulp, plugins, source, fileName, output) {
  return function () {
    return gulp.src(source)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.uglify().on('error', plugins.util.log))
            .pipe(plugins.concat(fileName))
            .pipe(plugins.livereload())
            .pipe(gulp.dest(output));
  };
};