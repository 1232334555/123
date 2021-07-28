// 暴露接口
module.exports = {
    // 多入口
     /* 
        vue和react、ts、es6将这些代码转为es5的时候，每个文件单独测试
    */
   entry:{
       'a':'./js/one.js',
       'b':'./js/two.js'
   },
    //出口
    output:{
        // 文件夹
        path: __dirname +'/dist',
        // 生成文件夹名 其中[name]取得的是入口对象中的键
        filename:'[name].js'
    },
    mode:'development'
}