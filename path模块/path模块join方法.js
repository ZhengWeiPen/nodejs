import {default as path} from 'path'

let __dirname = path.resolve()

// path.join方法回./以及../进行解析在拼接
// 输出：E:\web\案例\nodejs\day01\path模块\path模块join方法.js
console.log(path.join(__dirname, './path模块join方法.js'))
// 输出：E:\web\案例\nodejs\day01\path模块join方法.js
console.log(path.join(__dirname, '../path模块join方法.js'))
