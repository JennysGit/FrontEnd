const path = require('path');
const SRC_PATH = path.join(__dirname, './app');
const OUTPUT_TARGET = path.join(__dirname, './dist');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: ['./app/index.js']
    },
    output: {
        path: OUTPUT_TARGET,
        chunkFilename: 'js/[name].bundle.js?[hash]',
        filename: 'js/[name].bundle.js?[hash]'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/[name].css?[hash]', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './app/index.html',
            hash: false
        }),
        new CopyWebpackPlugin([{
            from: SRC_PATH + '/assets/img/logo.jpg',
            to: 'assets/img/logo.jpg'
        }])
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     sourceMap: true, //这里的soucemap 不能少，可以在线上生成soucemap文件，便于调试
        //     mangle: true
        // }),
        // new WebpackMd5Hash()
    ]
};