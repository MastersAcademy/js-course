'use strict';

module.exports = function (config) {
    config.set({
        autoWatch: true,
        browsers: ['Chrome', 'PhantomJS'],
        frameworks: ['jasmine'],
        logLevel: config.LOG_INFO,
        files: [
            '../node_modules/es6-shim/es6-shim.min.js',
            'karma.entry.js'
        ],
        phantomJsLauncher: {
            exitOnResourceError: true
        },
        preprocessors: {
            'karma.entry.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        singleRun: false,
        webpack: require('../webpack/webpack.test'),
            webpackServer: {
            noInfo: true
        }
    });
};