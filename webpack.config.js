var webpack = require('webpack');
var path = require("path");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, "components");
var BUILD_PATH = path.resolve(ROOT_PATH, "output");

module.exports = {
    entry:
        {
            main:  "./entry.js",
            vendor: ['babel-polyfill', 'react', 'react-dom', 'intl', 'react-intl']
        },
    output: {
        path: BUILD_PATH,
        publicPath: "/",
        filename: "gs-app.js"
    },
    devServer: {
        contentBase: "./",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader'})},
            {
                test: /\.less$/,
                use: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader'),
                    {
                        loader: require.resolve('less-loader')
                    },
                ],
            },
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader',
                query: {
                    "plugins": [
                        ["react-perf",{
                            "maxExecuteLimit": 5,
                            "maxRenderElements": 50,
                            "needAddPerfRule": {
                                "superClass": ["Component"]
                            },
                            "invalidStatements": [
                                "this.refs.\\w+.value\\s*=\\s*\\S+"
                            ]
                        }
                        ]
                    ]}
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=img/[name].[ext]' },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url' }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less'],
        /*alias: {
         'jquery': path.resolve(ROOT_PATH, './js/jquery-2.2.1.min.js'),
         }*/
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
        new ExtractTextPlugin("[name].css"),
        // jquery配置
        //new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),

        // 压缩配置
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        // 配置环境变量到Production，防止控制台警告
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]

};
