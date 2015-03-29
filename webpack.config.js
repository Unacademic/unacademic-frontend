var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer-core');
var customProperties = require('postcss-custom-properties');
var customSelectors = require('postcss-custom-selectors');
var nested = require('postcss-nested');
var csstyle = require('csstyle');
var variables = require('./src/styles/variables');

var config = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/scripts/entry.jsx'
    ],
    vendor: [
      'react',
      'ramda',
      'lodash',
      'immutable',
      'superagent'
    ]
  },
  output: {
    path: './build',
    filename: "bundle.js"
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['react-hot', 'babel?experimental'], exclude: /node_modules/},
      { test: /\.json$/, loader: 'json' },
      { test: /\.yml$/, loader: 'json!yaml' },
      { test: /\.css$/, loader: 'style-loader!css!postcss' },
      { test: /\.(png|woff)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  postcss: [
    nested,
    customSelectors(),
    customProperties({variables: variables}),
    csstyle,
    autoprefixer
  ]
};

module.exports = config;
