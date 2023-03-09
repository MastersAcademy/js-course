module.exports = (path, gulp) =>

() => gulp.src(path.src.fonts)
     .pipe(gulp.dest(path.dist.fonts));
