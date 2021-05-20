// 暴露接口
module.exports = {
    // resolve配置webpack如何查找文件
    resolve:{
        // 拓展名
        // extensions:['.js','.scss','.es','.css','less'],
        extensions:['.js','.es'],
        // 配置别名
        alias:{
            // 注意此时的'/'为E盘
            vue:'/node_modules/vue/dist/vue.js'
        }
    },
    // 入口文件
    entry:{
        "1":"./modules/1.js",
        "2":"./modules/2.js",
        "3":"./modules/3.js",
        "4":"./modules/4.js",
        "5":"./modules/5.js",
        "6":"./modules/6.js",
        "7":"./modules/7.js",
        "8":"./modules/8.js",
        "9":"./modules/9.js",
        "10":"./modules/10.js",
        "11":"./modules/11.js",
    },
    // 出口配置
    output:{
        // 文件名
        filename:"[name].js"
    },
    // 加载机
    module:{
        // 匹配规则
        rules:[
            // ES6
            {
                test:/\.js$/,
                loader:'babel-loader',
                // 排除文件夹
                exclude:'/node_modules',
                // 包含指定文件夹
                include:'/modules',
                options:{
                    presets:['env']
                }
            },
            // css
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            // scss
            {
                test:/\.scss/,
                use:['style-loader','css-loader']
            },
            // less
            {
                test:/\.less/,
                use:['style-loader','css-loader']
            }
        ]
    },
    // 模式
    mode:'development'
}