const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        bookley: './assets/books/index.js',
        blog: './assets/blog/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './webpack'),
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ],
              plugins: [
                '@babel/transform-runtime'
              ]
            }
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
        ]
    },
    optimization: {
      minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  },
    //devtool: "#source-map"
};
