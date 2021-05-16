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
    historyApiFallback: true,
    contentBase: './',
    host: 'localhost',
    port: 3001,
    open: true
  },
  plugins: [
    // make sure to include the plugin for the magic
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      title: "融合通信"
    }),
  ],
  optimization: {
    usedExports: true,
    runtimeChunk: {
      name: 'runtime'
    },
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 5,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendor'
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
}