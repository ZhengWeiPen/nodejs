import { default as path } from "path";

// path.extname()返回值，如果有扩展名者返回对应扩展名，否则返回空字符串

// .html
console.log(path.extname("index.html"))

// .html
console.log(path.extname("./a/b/index.html"))

// 空字符
console.log(path.extname("./a/b/index"))