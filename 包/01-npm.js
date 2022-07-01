function dateFormat(timestamp) {
    const date = new Date(timestamp)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()

    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    return `${y}-${makeUpZero(m)}-${makeUpZero(d)} ${makeUpZero(hh)}:${makeUpZero(mm)}:${makeUpZero(ss)}`
}


function makeUpZero(dataStr) {
    return dataStr < 10 ? '0' + dataStr : dataStr
}

console.log(dateFormat(+new Date()))

module.exports.dateFormat = dateFormat