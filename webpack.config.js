const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: path.join(__dirname, 'src'),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  devServer: {
    stats: 'errors-warnings',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackTagsPlugin({ tags: ['index.css'], append: true }),
    new CopyPlugin({
      patterns: [{ from: 'src/root', to: '' }],
    }),
    new CleanWebpackPlugin(),
  ],
};
