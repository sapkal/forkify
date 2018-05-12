const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['babel-polyfill',
        path.resolve(__dirname, 'src/js/index'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new htmlPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ],
    module: {
        //receive all the loaders we are configuring 

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}