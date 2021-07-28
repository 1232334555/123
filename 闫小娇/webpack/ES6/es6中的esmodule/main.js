// 引入模块
// 1、引入所有模块
// import * as main from './define';
// console.log(main);

// 2、使用解构，获得指定的接口
// import {name,demo} from './define';
// console.log({name,demo})

// 3、使用默认接口
// import define from './define';
// console.log(define);

// 4、获得默认接口，和指定解构接口
import xxoo, {demo} from './define';
console.log({xxoo,demo})