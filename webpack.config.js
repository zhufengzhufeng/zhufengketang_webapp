//1.先要配置es6语法 2.配置node环境
//配置 npm  还有 language
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口和出口
    entry:'./src/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve('dist') //path必须是绝对路径
    },
    module: {
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},// 从后往前写
            {test:/\.(jpg|png|gif)$/,use:'url-loader'}
        ]
    },
    devtool:'source-map', //可以映射出对应的源码位置
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};