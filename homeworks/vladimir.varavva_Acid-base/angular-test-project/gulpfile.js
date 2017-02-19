const gulp   = require('gulp'),
      path   = require('./gulp/path'),
      argv   = require('yargs').argv,
      reload = require('browser-sync').reload,
           $ = require('gulp-load-plugins')(),

get = task => require(path.tasks + task)(path, gulp, $, reload, argv);

gulp.task( 'less:build',  get( 'less'   ));
gulp.task( 'ts:build',    get( 'ts'     ));
gulp.task( 'img:build',   get( 'img'    ));
gulp.task( 'fonts:build', get( 'fonts'  ));
gulp.task( 'reload',      get( 'reload' ));
gulp.task( 'clean',       get( 'clean'  ));

gulp.task( 'helper', ['less:build'], get( 'helper' ));
gulp.task( 'build',  ['helper', 'img:build', 'fonts:build']);
gulp.task( 'server', ['build'],  get( 'server' ));
gulp.task( 'watch',  ['server'], get( 'watch'  ));

gulp.task( 'default', ['ts:build', 'watch' ]);
