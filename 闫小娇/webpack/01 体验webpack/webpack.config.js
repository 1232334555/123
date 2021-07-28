// webpack是一个天生的莫葵花的工具，遵循commonjs规范，所以使用coomonjs规范
module.exports = {
    // 入口
    entry:'./main.js',
    // 出口
    output:{
        // 路径
        // path:__dirname,
        // 默认值
        // path:__dirname+'/dist'
        // 文件名
        filename:'handler.js'
    },
    // 模式
    mode:'development'
}