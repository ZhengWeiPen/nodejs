// 创建成员
let student = {
    id: 1,
    name: '张三'
}

function say (message) {
    console.log(message)
}
// 导出当前模块成员
module.exports.student = student
module.exports.say = say