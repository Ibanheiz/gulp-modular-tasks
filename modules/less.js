module.exports = function (gulp, plugins, source, output) {
  return function () {
    return gulp.src(source)
            .pipe(plugins.less())
            .pipe(plugins.minifyCss({keepBreaks: false}))
            .pipe(plugins.livereload())
            .pipe(gulp.dest(output));
  };
};