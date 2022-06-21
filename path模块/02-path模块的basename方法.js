import { default as path } from "path";

let fileSrc = 'E:/web/案例/nodejs/day01/path模块/02-path模块的basename方法.js'

/*
    注意：第二个参数，如果没有选择该参数，者获取完整文件名（文件名+扩展名，当扩展名不匹配时也是如此
    如果选择了该参数者只获取文件名
*/
let filename = path.basename(fileSrc, ".js")
// 02-path模块的basename方法.js
console.log(filename);