const gulp = require('gulp');
// 引入插件
// js压缩插件
const uglify = require('gulp-uglify');
// css压缩
const cssmin = require('gulp-clean-css');
// // html压缩
const minhtml = require('gulp-minify-html');
// // 压缩图片
const minimage = require('gulp-imagemin');
// // 引入合并文件
const concat = require('gulp-concat');
// // 重命名
const rename = require('gulp-rename');
// // js检测
const jslint = require('gulp-jslint');
// 定义默认任务
gulp.task('default',()=>{
    // // 读取文件
    // gulp.src('./public/js/jquery.js')
    // // 压缩js
    // .pipe(uglify())
    // // 输出文件
    // .pipe(gulp.dest('./dist'));

    // 读取文件
    // gulp.src('./public/css/main.css')
    // 压缩css
    // .pipe(cssmin())
    // 输出文件
    // .pipe(gulp.dest('./dist'))

    // // 读取文件
    // gulp.src('./public/html/index.html')
    // // 压缩html
    // .pipe(minhtml())
    // .pipe(gulp.dest('./dest'))
   
    
    // // 读取文件
    // gulp.src('./public/iamge/*')
    // // 压缩图片
    // .pipe(minimage())
    // // 输出文件
    // .pipe(gulp.dest('./dist'))


    // 读取文件
    gulp.src('./public/js/?.js')
    // 合并文件
    .pipe(concat('all.js'))
    // 压缩
    .pipe(uglify())
    // 重命名
    .pipe(rename('xxoo.js'))
    // 输出文件
    .pipe(gulp.dest('./dist'))

    // // 读取文件
    // gulp.src('./public/js/xxoo.js')
    // // js检测
    // .pipe(jslint())
    // // 输出到默认任务
    // .pipe(jslint.reporter('default'))
})