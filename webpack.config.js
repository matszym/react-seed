const webpack = require('webpack');

module.exports = {
  entry: [
    "./app/app.js"
  ],
  output: {
    filename: "bundle.js",
    path: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  watchOptions: {
    poll: true
  },
  devServer: {
    contentBase: 'public',
    publicPath: '/public/',
    host: "0.0.0.0",
    historyApiFallback: true
  }
};