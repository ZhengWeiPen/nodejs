import { default as path } from "path";

let fileSrc = 'E:/web/案例/nodejs/day01/path模块/02-path模块的basename方法.js'

/*
    注意：第二个参数，为移除对应的文件扩展名，如果匹配者返回文件名，否则返回文件名+扩展名
*/
let filename = path.basename(fileSrc)
// 02-path模块的basename方法.js
console.log(filename);

filename = path.basename(fileSrc, ".js")
// 02-path模块的basename方法
console.log(filename);

// path模块
console.log(path.basename("E:/web/案例/nodejs/day01/path模块/"))
