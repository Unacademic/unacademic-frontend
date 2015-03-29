module.exports = {
  devtool: '',
  target: 'node',
  entry: './test/index.spec.js',
  output: {
    path: __dirname + '/test',
    filename: 'testBundle.js'
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['react-hot', 'babel?experimental'], exclude: /node_modules/},
      { test: /\.json$/, loader: 'json' },
      { test: /\.yml$/, loader: 'json!yaml' },
      { test: /\.(css|png|woff)$/, loader: 'url-loader?limit=100000' }
    ]
  }
}
