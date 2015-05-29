module.exports = function (gulp, plugins, file) {
  return function () {
    return plugins.nodemon({
            script: file,
            ext: 'js',
            env: { 'NODE_ENV': 'development' }
          });
  };
};