import { default as path } from "path";

let fileSrc = 'E:/web/案例/nodejs/day01/path模块/02-path模块的basename方法.js'

let filename = path.basename(fileSrc)
// 02-path模块的basename方法.js
console.log(filename);