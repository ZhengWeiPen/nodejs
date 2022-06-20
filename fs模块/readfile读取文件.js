// 导入fs模块
const fs = require('fs');

// 调用fs.readFile（）方法
fs.readFile('./data.json',"utf-8", (err, data) => {
    /**
     * 回调的两个参数
     *  参数一（err）：错误时的结果
     *  参数二（data）：成功时的结果
     *  如果文件读取成功，err者为null，否则为值为错误对象
     *  如果文件读取失败，data者为undefined，否则为读取的内容
     * */
    if(err) {
        return console.error(err.message)
    }
    console.log(JSON.parse(data));
})