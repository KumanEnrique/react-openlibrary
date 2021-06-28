const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"index.bundle.js",
        path:path.resolve(__dirname,"build")
    },
    devServer: {
        port: 3000,
        open: true
    },
    resolve:{
        extensions:[".js",".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:"./src/index.html"
        })
    ]
}