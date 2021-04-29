const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.styl|css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'stylus-loader'
          ],
        },
      ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: __dirname + "/src/pages/index.html",
            inject: 'body',
            filename:"index.html"
          }),
          new htmlWebpackPlugin({
            template: __dirname + "/src/pages/news.html",
            inject: 'body',
            filename:"news.html"
          }),
          new htmlWebpackPlugin({
            template: __dirname + "/src/pages/photos.html",
            inject: 'body',
            filename:"photos.html"
          }),
          new htmlWebpackPlugin({
            template: __dirname + "/src/pages/shedule.html",
            inject: 'body',
            filename:"shedule.html"
          }),
          new MiniCssExtractPlugin({
            filename: 'index.css'
          })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: true,
      }
}