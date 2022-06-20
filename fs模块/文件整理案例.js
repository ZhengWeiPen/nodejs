// 导入fs模块
const fs = require('fs');

// 调用fs.readFile（）方法
fs.readFile('./学生成绩.txt',"utf-8", (err, data) => {
    if(err) {
        return console.error(err.message)
    }
    data = data.replace(/=/g, ":")
    data = data.split(' ')
    fs.writeFile('./学生成绩.txt', data.join('\r'), "utf-8", (err) => {
        /** 
         * 如果文件写入成功，者err的值为null,否则err返回错误对象
        */
        console.log(err)
    });
})