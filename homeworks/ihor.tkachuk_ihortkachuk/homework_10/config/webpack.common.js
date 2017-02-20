let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let helpers = require('./helpers');

module.exports = {
  entry: {
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json', '.html', '.css', '.scss', '.xlf'],
    modules: [helpers.root('src'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader',
          'angular2-router-loader',
          'angular2-template-loader'
        ]
      },
      { test: /\.html$/, use: 'html-loader' },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: [
          helpers.root('public/css'),
          helpers.root('node_modules')
        ],
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: true
              }
            }
          ],
          publicPath: '/dist/'
        })
      },
      { test: /\.xlf$/, use: 'raw-loader' },
      { test: /\.scss$/, use: ['raw-loader', 'postcss-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root(),
      {}
    ),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'app'])
    })
  ]
};
