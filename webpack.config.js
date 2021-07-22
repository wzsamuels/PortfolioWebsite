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
        ]
    },
    //devtool: "#source-map"
};
