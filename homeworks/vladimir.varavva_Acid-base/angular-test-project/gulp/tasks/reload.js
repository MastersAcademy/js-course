module.exports = (path, gulp, $, reload) =>

() => gulp.src('')
     .pipe(reload({ stream: true }));
