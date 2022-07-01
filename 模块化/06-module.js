module.exports.say = function (message) {
    console.log(message)
}

module.exports.student = {
    name: '张三',
    id: '1'
}

console.log(exports === module.exports) // true

module.exports = {

}

console.log(exports === module.exports) // false
