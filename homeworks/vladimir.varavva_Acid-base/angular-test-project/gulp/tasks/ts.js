const webpack = require('webpack'),
      stream  = require('webpack-stream'),
      config  = require('../../webpack.config');
module.exports = (path, gulp) =>

() => gulp.src('')
     .pipe(stream(config, webpack))
     .pipe(gulp.dest(path.dist.js));
