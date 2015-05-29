module.exports = function (gulp) {
  var plugins = require('gulp-load-plugins')();
  return {
    createTask: function (name) {
      var args = Array.prototype.slice.call(arguments, 1);
      args.unshift(gulp, plugins);
      return require('./modules/' + name).apply({}, args);
    }
  };
};