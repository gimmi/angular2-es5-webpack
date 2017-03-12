const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: [
            'core-js/es6',
            'core-js/es7/reflect',
            'zone.js/dist/zone',
            'rxjs',
            '@angular/core',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            '@angular/forms',
            '@angular/router',
            'bootstrap/dist/css/bootstrap.css'
        ],
        app: "./src/main.js"
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
        // Workaround for https://github.com/angular/angular/issues/11580
        new webpack.ContextReplacementPlugin(
            /@angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
            path.resolve(__dirname, 'src')
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new HtmlWebpackPlugin({ 
            template: './src/index.html', 
            filename: 'index.html',
            inject: 'body'
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
