const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './build/'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [/node_modules/,/config/, /ignore_lib/]
      }
    ]
  },
  devServer: {
    contentBase: './',
    host: 'localhost',
    port: 3001,
    open: true
  },
  plugins: [
    // make sure to include the plugin for the magic
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    }),
  ],
}