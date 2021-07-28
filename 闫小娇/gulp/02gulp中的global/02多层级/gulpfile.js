let gulp = require('gulp');
// 定义默认任务
gulp.task('default',()=>{
    // 读取文件
    // gulp.src('./public/**/*')
    // gulp.src('./public/**/1.*')
    gulp.src('./public/**/*.js')
    // 输出到指定目录
    .pipe(gulp.dest('./day'))
})