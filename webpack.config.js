const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//创建实例
const hwp = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件
    filename: 'index.html'
})

//向外暴露一个打包的配置对象 ，基于Node
module.exports = {
    mode: 'development',//'production' 
    //4.x中，预定大于配置，为了减少配置文件，
    //入口文件默认是src/index.js,不用配置entry
    //出口是dist/main.js
    plugins: [
        hwp
    ],
    module: {//所有第三方模块的匹配规则
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: '/node_modules/' },
            // {test:/\.css$/,use:['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]']}
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            },

                        }
                    }

                    , 'sass-loader']
            },
            {
                test: /\.ttf|woff|woff2|eot|svg$/,
                use: 'url-loader' //处理字体
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.join(__dirname, './src')
        }
    }
}

//使用export default{} 行不行？不行。
//这是ES6向外导出模块的API，对应 import ** from '路径'