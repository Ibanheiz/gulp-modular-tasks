module.exports = function (gulp, plugins, source, env) {
  process.env.NODE_ENV = env;
  return function () {
    return gulp.src(source)
            .pipe(plugins.jasmine({
                verbose: true,
                includeStackTrace: true
            }));
  };
};