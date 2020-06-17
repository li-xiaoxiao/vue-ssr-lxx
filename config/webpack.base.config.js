
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  // resolve: {
  //   alias: {
  //     'vue$': 'vue/dist/vue.common.js'
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader','css-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  devServer: {
    open: true
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}