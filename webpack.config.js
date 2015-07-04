var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: {
    app: [
      './src/entry.jsx'
    ],
    vendor: [
      'react',
      'ramda',
      'lodash',
      'immutable',
      'axios'
    ]
  },
  output: {
    path: './build',
    filename: "bundle.js"
  },
  eslint: {
    configFile: './.eslintrc'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['react-hot', 'babel?experimental'], include: /src/},
      { test: /\.(js|jsx)$/, loader: "eslint-loader", exclude: /node_modules/},
      { test: /\.json$/, loader: 'json' },
      { test: /\.yml$/, loader: 'json!yaml' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(png|woff)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  resolveLoader: { fallback: __dirname + "/node_modules"  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
