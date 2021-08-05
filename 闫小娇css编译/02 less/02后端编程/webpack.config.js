
// 配置
module.exports = {
    entry:'./main.js',
    // 出口
    output:{
        filename:'index.js'
    },
    // 配置module属性
    module:{
    //配置规则
    rules:[
        {
            test:/\.less$/,
            loader:'style-loader!css-loader'
        }
    ] 
    },
    // 模式
    mode:'development'
}