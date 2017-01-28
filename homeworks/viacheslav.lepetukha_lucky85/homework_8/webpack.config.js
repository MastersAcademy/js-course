'use strict';

module.exports = {

    entry: './ts/main',
    output: {
        path: __dirname + '/js',
        filename: 'bild.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    devtool: 'source-map', // if we want a source map
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 300
    },

};