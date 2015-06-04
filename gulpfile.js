(function () {
  'use strict';

  var gulp = require('gulp');
  var module = require('./')(gulp);
  // Pra quem usa um bower
  var bowerFiles = [
    './examples/bower/bower_components/**/angular.min.js',
    './examples/bower/bower_components/**/*.min.js'
  ];
  // Files e tasks para o livereload
  var watchers = [
    {
      file: './index.js',
      task: 'minify-concat:js'
    },
    {
      file: './index.js',
      task: 'lint'
    }
  ];

  /**
  * Faz o build, minifica e concatena Stylus para CSS
  * createTask('nome do módulo', 'source do arquivo', 'destino do arquivo compilado')
  */
  gulp.task('build:stylus', module.createTask('stylus', './examples/stylus/index.styl', 'examples/stylus'));

  /**
  * Faz o build, minifica e concatena LESS para CSS
  * createTask('nome do módulo', 'source do arquivo', 'destino do arquivo compilado')
  */
  gulp.task('build:less', module.createTask('less', './examples/less/index.less', 'examples/less'));

  /**
  * Utiliza o Lint js com configuração default no arquivo
  * createTask('nome do módulo', 'source do arquivo')
  */
  gulp.task('lint', module.createTask('lint', './examples/js/index.js'));

  /**
  * Minifica e concatena JavaScript
  * createTask('nome do módulo', 'source do arquivo', 'nome do arquivo de destino do js concatenado' 'destino do arquivo compilado')
  */
  gulp.task('minify-concat:js', ['lint'], module.createTask('minify-concat', './examples/js/index.js', 'all.min.js', 'examples/js'));

  /**
  * Concatena as bibliotecas minificas baixadas pelo bower
  * createTask('nome do módulo', 'source do arquivo', 'nome do arquivo de destino do js concatenado' 'destino do arquivo compilado')
  */
  gulp.task('bower-concat', ['copy-bower-map'], module.createTask('concat', bowerFiles, 'components.min.js', 'examples/bower'));

  /**
  * Copia os arquivos .map das bibliotecas minificadas do bower
  * createTask('nome do módulo', 'source do arquivo', 'destino do arquivo')
  */
  gulp.task('copy-bower-map', module.createTask('copy', './examples/bower/bower_components/**/*min.js.map', './examples/bower/'));

  /**
  * Optimiza as imagens
  * createTask('nome do módulo', 'diretório das imagens', 'destino das imagens optimizadas')
  */
  gulp.task('imageopt', module.createTask('imageopt', './examples/image-opt/original/*.*', './examples/image-opt/'));

  /**
  * Roda o nodemon para o arquivo principal
  * createTask('nome do módulo', 'App')
  */
  gulp.task('nodemon', module.createTask('nodemon', 'app.js'));

  /**
  * Ativa o livereload e recebe algum arquivo não monitorado por outras tasks
  * createTask('nome do módulo', 'Arquivos com tarefas a serem observados' 'Arquivos sem tasks a serem observados')
  */
  gulp.task('livereload', module.createTask('watch', watchers, './index.js'));

  /**
  * Roda os testes criados com o mocha
  * createTask('nome do módulo', 'arquivos de teste')
  */
  gulp.task('mocha', module.createTask('mocha', './test/*.js'));

  /**
  * Roda os testes criados com o jasmine
  * createTask('nome do módulo', 'arquivos de teste')
  */
  gulp.task('jasmine', module.createTask('jasmine', './examples/jasmine/*Spec.js', 'test'));

  // Roda a porra toda
  gulp.task('default', ['build:stylus', 'build:less', 'minify-concat:js', 'bower-concat', 'nodemon', 'livereload', 'mocha', 'jasmine']);
}());