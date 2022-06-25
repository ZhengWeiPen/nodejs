// 导入模块
import { default as http } from 'http'

// 创建web服务器实例
const server = http.createServer()

server.on("request", (req, resp) => {
    // req请求对象实例，它包含了与客户端相关的数据和属性
    // req.url 获取客户端请求服务端的URL地址，相对路径
    console.log(req.url)
    // req.method 获取客户端的请求类型，GET、POST、PUT、DELETE
    console.log(req.method)
    // resp.setHeader()方法 用于设置响应头,为了防止中文乱码，需要设置Content-Type的值等于text/html; charset=utf-8，
    resp.setHeader("Content-Type", "text/html; charset=utf-8")
    // resp.end()方法 向客户端响应数据
    resp.end("<h1>Hello Word!</h1>")
})

server.listen('8080', () => {
    console.log("http server run at http://127.0.0.1:8080")
})