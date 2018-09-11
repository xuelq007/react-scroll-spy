const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
    entry: [
        'babel-polyfill',
        './src/index.jsx'
    ],
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?cacheDirectory'
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9' // React doesn't support IE8 anyway
                                    ]
                                })
                            ]
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ],
                exclude: /\.useable\.less$/
            },
            {
                test: /\.useable\.less$/,
                use: [
                    {
                        loader: 'style-loader/useable'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: loader => [
                                require('autoprefixer')()
                            ]
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[hash:8].[ext]'
                    }
                }]
            }
        ]
    },
    output: {
        path: __dirname + '/docs',
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.jsx','.json'],
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin()
        ],
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: {
            name: 'runtime'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['docs']),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
            chunkFilename: '[id].[contenthash:8].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new webpack.HashedModuleIdsPlugin()
    ]
});
