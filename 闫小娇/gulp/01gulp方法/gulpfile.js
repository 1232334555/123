// 引入模块
let gulp = require('gulp');
// 设定默认的任务
gulp.task('default',()=>{
    // 文件的读取
    gulp.src('./js/demo.js')
    // 输出到指定的文件夹---xxoo
    .pipe(gulp.dest('./xxoo'))
})
// // 检测---单文件
// gulp.watch('./js/demo.js',(obj)=>{
//     console.log(obj);
//     gulp.src(obj.path)
//     // 输出到指定的文件
//     .pipe(gulp.dest('./xxoo'))
// })
// 检测多文件
gulp.watch('./js/*.js',(obj)=>{
    // 读取文件
    gulp.src(obj.path)
    // 输出到指定的文件
    .pipe(gulp.dest('./xxoo'))
})




let gulp = require('gulp');
gulp.task('default',()=>{
    // 读取文件位置
    gulp.src('./js/demo.js')
    // 输入到指定文件
    .pipe(gulp.dest('./xxoo'))
});
// 单文件检测
gulp.watch('./js/demo.js',(obj)=>{
    gulp.src(obj.path)
    .pipe(gulp.dest('./xxoo'))
})
// 多文件检测
gulp.watch('./js/*.js',(obj)=>{
    gulp.src(obj.path)
    .pipe(gulp.dest('./xxoo'))
})