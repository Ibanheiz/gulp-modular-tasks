module.exports = function (gulp, plugins, source) {
  return function () {
    return gulp.src(source)
            .pipe(plugins.mocha())
            .once('error', function () {
                process.exit(1);
            })
            .once('end', function () {
                process.exit();
            });
  };
};