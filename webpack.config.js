var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const VENDOR_LIBS = [
    'lodash',
    'moment',
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'redux',
    'redux-thunk'
];

module.exports = {
    entry: {
        bundle: ['./src/index.js', './style/style.scss', 'bootstrap-loader/extractStyles'],
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js' // replaces [name] with key from entry section
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/ // exclude node modules as trust that all are ES5 already
            },
            // { // sass / scss loader for webpack
            //     test: /\.(sass|scss)$/,
            //     loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            // },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/, // set file types to handle
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 40000, publicPath: './', name: './img/[hash].[ext]' }
                    }, // depending on image size, will either incorporate img directly into bundle.js (< 40 kb) or supply link, use object rather than string so can set config
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {
                                progressive: true,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    } // first to be applied
                ]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
                // loader: "url?limit=10000"
                // use: "url-loader?name=fonts/[name].[ext]"
                use: [
                    {
                        loader: 'url-loader',
                        options: { publicPath: '../', name:'./fonts/[name].[ext]'}
                    }
                ]
            },
            {
                test: /\.(ttf|eot)(\?[\s\S]+)?$/,
                use: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.min\.css$/,
                use: 'file-loader?name=css/[name].[ext]'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 3030
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }), // checks double including between bundle & vendor, any duplicates are only added to vendor.js
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'css/style.[chunkhash].css',
            allChunks: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};