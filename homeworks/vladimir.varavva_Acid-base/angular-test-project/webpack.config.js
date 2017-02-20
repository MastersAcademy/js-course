const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    watch: true,
    entry: {
        polyfill: './src/app/polyfill',
        vendor: './src/app/vendor',
        app: './src/app/main',
    },
    output: {
        filename: './[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(html|css)$/,
                loader: 'raw-loader',
                exclude: /\.async\.(html|css)$/
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfill']
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/
        )
    ]
};
