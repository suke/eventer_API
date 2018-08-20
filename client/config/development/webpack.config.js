const path = require('path')
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    application: './src/javascripts/application.js'
  },
  output: {
    path: path.join(__dirname, '../../../app/assets/javascripts'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
