# gulp-modular-tasks
Projeto para modularizar as tasks do gulp.

## Install

```sh
$ npm install --save-dev gulp-modular-tasks
```

#Modules
    modules/
      concat
      copy
      imageopt
      less
      lint
      minify-concat
      mocha
      nodemon
      stylus
      watch

## Examples

```javascript

var gulp = require('gulp');
var module = require('gulp-modular-tasks')(gulp);


// Faz o build, minifica e concatena Stylus para CSS
//createTask('nome do módulo', 'source do arquivo', 'destino do arquivo compilado')
gulp.task('build:stylus', module.createTask('stylus', './css/stylus/index.styl', '.css/build/'));

```

## LICENSE [MIT](LICENSE)
