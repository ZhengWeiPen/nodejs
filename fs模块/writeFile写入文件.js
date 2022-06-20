// 导入fs模块
const fs = require('fs');

let data = JSON.stringify([
    {
        id: '1',
        name: '张三'
    },
    {
        id: '2',
        name: '李四'
    },
    {
        id: '3',
        name: '王五'
    }
])

// 调用fs.writeFile方法写入内容
fs.writeFile('./data.json', data, "utf-8", (err) => {
    /** 
     * 如果文件写入成功，者err的值为null,否则err返回错误对象
    */
    console.log(err)
});