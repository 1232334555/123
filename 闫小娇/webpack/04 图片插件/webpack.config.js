module.exports = {
    entry:'./main.js',
    // 出口
    output:{
        filename:'handler.js'
    },
    // 设置插件
    module:{
        // 定义规则
        rules:[
            {
                // 图片
                // 匹配图片文件
                test:/\.(png|gif|jpeg|jpg)$/,
                // 加载机
                loaders:'url-loader'
                 // 图片过大的时候转为base64位反而不好，界限设置为10kb
                // loaders: 'url-loader?limit=' + 1024 * 10
            }
        ]
    },
    mode : 'development'
}