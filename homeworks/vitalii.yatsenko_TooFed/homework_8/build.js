var webpack = require('webpack');
var config = require('./webpack.config.js');
var compiler = webpack(config);
compiler.run(function () {
// stay silent
});