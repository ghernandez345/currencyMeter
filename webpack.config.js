var path = require('path');
var webpack = require('webpack');

var SRC_CONTEXT = path.join(__dirname, './src');
var PUBLIC_PATH = path.join(__dirname, './public');

module.exports = {

  context: SRC_CONTEXT,

  entry: ['whatwg-fetch', './main'],

  output: {

    filename: 'bundle.js',

    path: PUBLIC_PATH

  },

  resolve: {

    extensions: ['', '.js', '.jsx']

  },

  devtool: '#inline-source-map',

  module: {

    loaders: [

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }

    ]

  }

};
