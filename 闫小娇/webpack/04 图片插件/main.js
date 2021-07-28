// 创建图片
let img = new Image();
// 设置值
img.src = require('./imgs/1.jpg');
// 创建图片对象
let img1 = new Image();
// 设置值
img1.src = require('./imgs/1.png');
img1.style.width = '500px';
//上树
document.body.appendChild(img);
document.body.appendChild(img1);