const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: [
            'bootstrap/dist/css/bootstrap.css'
        ],
        app: "./src/app.module.js"
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[chunkhash].js"
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.html$/, use: ['raw-loader'] },
            { test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/, use: ['file-loader'] }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new HtmlWebpackPlugin({ 
            template: './src/index.html', 
            filename: 'index.html',
            inject: 'head'
        })
    ],
    devServer: {
        proxy: {
            '/api': {
                // logLevel: 'debug',
                target: 'http://127.0.0.1:8078'
            }
        }
    }
};
