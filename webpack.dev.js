const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge({
  entry: [ 
    //'react-hot-loader/patch',//这个要放在数组的第一个位置
    //'webpack-hot-middleware/client',
    path.resolve(__dirname, 'src/index.tsx')
    // 'babel-polyfill', //这个不需要 报错重复instance
  ],
  devtool: 'inline-source-map',//不要用于生产环境
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    //下面三个用于连接express的hot更新
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    filename: 'bundle.js',
  }
}, common);