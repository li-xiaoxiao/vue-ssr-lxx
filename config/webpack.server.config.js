const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const base = require('./webpack.base.config')
const externals = require('webpack-node-externals')
const ServerPlugin = require('vue-server-renderer/server-plugin')
module.exports = webpackMerge(base, {
  mode: 'development',
  entry: {
    server: path.resolve(__dirname, '../src/server-entry.js'),
  },
  externals: [externals()], //第三方模块不需要打包，在node端直接通过require引用
  target: 'node', //打包给node用
  output: {
    libraryTarget: 'commonjs2' // 使用commonjs导出，变成module.exports,而不是一个必包函数
  },
  plugins: [
    new ServerPlugin(),
    new HtmlWebpackPlugin({
      // 只做一个拷贝
      filename: 'index.ssr.html',
      template: path.resolve(__dirname, '../public/index.ssr.html'),
      excludeChunks: ['server'] // 不需要引入server.bundle.js
    })
  ]
})