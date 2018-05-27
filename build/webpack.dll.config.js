var path = require('path')
var webpack = require('webpack')
var AssetsPlugin = require('assets-webpack-plugin')
const packageJson = require('../package')

module.exports = {
  // 你想要打包的模块的数组
  entry: {
    libs: packageJson.dll,
  },
  output: {
    path: path.join(__dirname, '../static/js'), // 打包后文件输出的位置
    filename: '[name]_[hash:6].dll.js',
    library: '[name]_[hash:6]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '../dll/[name]-manifest.json'),
      name: '[name]_[hash:6]_library',
      context: __dirname,
    }),
    // 压缩打包的文件，与该文章主线无关
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    // 为了生成JSON信息，给HtmlWebpackPlugin输出到页面用的
    new AssetsPlugin({
      filename: 'config.json',
      path: path.join(__dirname, '.','../dll'),
    }),
  ],
}
