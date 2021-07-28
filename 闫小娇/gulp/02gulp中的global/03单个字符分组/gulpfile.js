// 引入模块
let gulp = require('gulp');

// 定义默认任务
gulp.task('default',()=>{
    // 读取js文件夹下的abc.js aac.js adc.js
    // gulp.src('./js/a[abc]c.js');
    // gulp.src('./js/a[a-c]c.js')
    // gulp.src('./js/a[^a-c]c.js')
    // 单个字符？
    gulp.src('./js/??.js')
    // 输出到指定的目录
    .pipe(gulp.dest('./dist'))
})