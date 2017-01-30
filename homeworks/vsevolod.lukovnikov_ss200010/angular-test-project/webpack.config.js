module.exports = {
  entry: {
    app: "./app/main.ts",
    polyfill: "./app/polyfill.ts",
    vendor: "./app/vendor.ts"
  },
  output: {
    filename: "./dist/[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".ts"]
  },
  watch:true,
  
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: "source-map"
};
