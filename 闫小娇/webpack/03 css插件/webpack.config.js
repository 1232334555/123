// 暴露接口
module.exports =  {
    // 入口
    entry: './main.js',
    // 出口
    output: {
        filename: 'handler.js'
    },
    // 设置插件
    module: {
        // 定义规则
        rules: [
            {
                // css加载机
                // 匹配css文件
                test: /\.css$/,
                // 加载机
                loaders: 'style-loader!css-loader'
            }
        ]
    },
    mode: 'development'

}