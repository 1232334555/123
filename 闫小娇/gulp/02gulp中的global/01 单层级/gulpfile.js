// let gulp = require('gulp');
// // 定义默认任务
// gulp.task('default',()=>{
//     // 读取某个文件夹下的所有文件，可以进行类型的过滤
//     // gulp.src('./js/*') 赋值所有
//     // gulp.src('./js/*.css') css文件
//     gulp.src('./js/1.*')
//     // 输出到指定的目录
//     .pipe(gulp.dest('./public'))
// })
// 引入模块
let gulp = require('gulp');
设置默认任务
gulp.task('default',()=>{
    读取文件夹
    // gulp.src('./js/*');
    // gulp.src('./js/*.css');
    gulp.src('./js/2.*')
输出到指定目录
    pipe(gulp.dest('./public'))
})



