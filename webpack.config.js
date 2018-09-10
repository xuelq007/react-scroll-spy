const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index'
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel-loader?cacheDirectory'
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
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
                        loader: 'less-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ],
        noParse: [
            /react.production.min/
        ]
    },
    output: {
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: {
            'react-dom': 'react-dom/umd/react-dom.development.js',
            'react': 'react/umd/react.development.js',
        }
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        port: 3000,
        hot: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
