const prefixer = require('autoprefixer'),
      mqpacker = require('css-mqpacker'),
      mrules   = require('postcss-merge-rules'),
      longhand = require('postcss-merge-longhand'),
      cssnano  = require('cssnano'),
      uncss    = require('postcss-uncss'),

processors = [
    mqpacker(),
    mrules(),
    longhand(),
    prefixer({ browsers: ['last 2 versions'] }),
    cssnano()
];
module.exports = (path, gulp, $, reload, argv) =>

() => gulp.src(path.src.less)
     .pipe($.changed(path.dist.css, { extension: '.css' }))
     .pipe($.sourcemaps.init())
     .pipe($.less().on('error',
           $.notify.onError({
             message: '<%= error.message %>' })))
     .pipe($.if(argv.p,
           $.postcss(processors)))
     .pipe($.sourcemaps.write('./'))
     .pipe(gulp.dest(path.dist.css))
     .pipe(reload({ stream: true }));
