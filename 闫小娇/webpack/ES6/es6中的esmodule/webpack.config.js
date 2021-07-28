module.exports = {
    entry:'./main.js',
    output:{
        filename:'./xxoo.js'
    },
    module:{
        // 配置规则
        rules:[
            {
                test:/\.js$/,
                loaders:'babel-loader',
                // 配置选项
                options:{
                    presets:['env']
                }
            }
        ]
    },
    mode:'development'
}