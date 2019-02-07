const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    application: './src/application.tsx'
  },
  output: {
    path: path.join(__dirname, '../../../app/assets/javascripts'),
    filename: '[name].js',
    publicPath: 'http://localhost:8000/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.ts|tsx?$/, loader: 'ts-loader' },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../../../app/assets/javascripts'),
    port: 8000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
