const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const base = require('./webpack.base.config')
const ClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = webpackMerge(base, {
  mode: 'development',
  entry: {client: path.resolve(__dirname, '../src/client-entry.js')},
  plugins: [
    new ClientPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
    })
  ]
})
