import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from 'path';

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: './index.html',
  template: path.resolve(__dirname, './src/index.html'),
});

export default {
  entry: path.resolve(__dirname, 'src/index'),
  plugins: [new CleanWebpackPlugin(), htmlWebpackPlugin],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
};
