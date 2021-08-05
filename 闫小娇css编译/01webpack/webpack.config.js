// 使用esmodules的规范加载css
// 暴露接口
module.exports = {
    // 入口
    entry: './main.js',
    // 出口
    output: {
        filename: "handler.js"
    },
    // 模板
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options:{
                    presets:['env']
                }
            },
        {
            // css加载机
            // 匹配css文件
            test:/\.css$/,
            // 加载机
            loaders:"style-loader!css-loader"
        }
        ]
    },
    // 模式
    mode:"development"
}