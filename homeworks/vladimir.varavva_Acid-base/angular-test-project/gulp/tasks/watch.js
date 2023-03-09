module.exports = (path, gulp, $) =>

() => { $.watch(path.watch.helper, (event, cb) =>
            gulp.start('reload'));
        $.watch(path.watch.less, (event, cb) =>
            gulp.start('less:build'));
        $.watch(path.watch.img, (event, cb) =>
            gulp.start('img:build'));
        $.watch(path.watch.fonts, (event, cb) =>
            gulp.start('fonts:build'));
 };
