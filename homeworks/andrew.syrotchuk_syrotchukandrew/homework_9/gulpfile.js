"use strict";
const gulp = require("gulp");
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const watchify = require("watchify");
const tsify = require("tsify");
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const minify_css = require("gulp-minify-css");
const del = require('del');
const path = require('path');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const tsc = require("gulp-typescript");

const src = {
    main_less: "./app/styles/main.less",
    js: "./app/js/main.ts",
    static: "./index.html"
};

const output = {
    dir: "./dist/",
    css: 'main.css',
    js: 'main.js'
};

gulp.task("copyStaticFiles", function() {
    return gulp.src(src.static, {since: gulp.lastRun('copyStaticFiles')})
        .pipe(gulp.dest(output.dir));
});

gulp.task("copyConfigFile", function() {
    return gulp.src('./systemjs.config.js')
        .pipe(gulp.dest(output.dir));
});

gulp.task('style', function() {
    return gulp.src(src.main_less)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minify_css({keepSpecialComments: 0, restructuring: false, processImport: false}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output.dir));
});

gulp.task("script", function() {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['app/js/main.ts'],
        cache: {},
        packageCache: {}
    })
        .add('app/js/main.ts')
        .plugin(tsify, { noImplicitAny: true })
        .bundle()
        .pipe(plumber())
        .pipe(source(output.js))
        .pipe(gulp.dest(output.dir));
});

/*
gulp.task("script", function() {
    return gulp.src("app/js/!*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc())
    .pipe(sourcemaps.write(".", {sourceRoot: '/app'}))
    .pipe(gulp.dest(output.dir));
});
*/


gulp.task('copy:libs', function() {
    return gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/systemjs/dist/system.src.js'
    ])
        .pipe(gulp.dest('./dist/lib'))
});

gulp.task("startServer", function() {
    browserSync.init({
    server: 'dist'
});
browserSync.watch('dist/*.html').on('change', browserSync.reload);
});

gulp.task('clean', function() {
    return del('dist');
});

gulp.task('watch', function() {
    gulp.watch('app/js/*.ts', gulp.series('script'));
gulp.watch('app/*.html', gulp.series('copyStaticFiles'));
gulp.watch('app/styles/*.less', gulp.series('style'));
});

gulp.task('default',
    gulp.series('clean', gulp.parallel('copy:libs', 'script', 'style', 'copyStaticFiles', 'copyConfigFile'),
        gulp.parallel('watch', 'startServer')));
