const path = require('path')
module.exports = {
  mode: 'production',
  entry: {
    application: './src/application.js'
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
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules']
      }
    ]
  }
}
