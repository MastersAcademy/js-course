const pngquant = require('imagemin-pngquant');
module.exports = (path, gulp, $, reload) =>

() => gulp.src(path.src.img)
     .pipe($.changed(path.dist.img))
     .pipe($.imagemin({
             use: [ pngquant() ],
             svgoPlugins: [{
             removeViewBox: false }],
             progressive: true,
             interlaced:  true }))
     .pipe(gulp.dest(path.dist.img))
     .pipe(reload({ stream: true }));
