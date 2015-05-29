var assert = require('chai').assert;
var fs = require('fs');
var gulp, module, files;

describe('modules', function () {
  describe('createTask()', function () {

    before(function () {
      gulp = require('gulp');
      module = require('../')(gulp);
      files = fs.readdirSync('./modules');
    });

    it('Todos arquivos no diretório modules devem retornar uma função', function () {
      files.forEach(function (file) {
        assert.isFunction(module.createTask(file));
      });
    });
  });
});