// 导入模块
import { default as http } from 'http'

// 创建web服务器实例
const server = http.createServer()

server.on("request", (req, resp) => {
    

    let content = `<h1>404 Not Found</h1>`

    resp.statusCode = 404
    resp.statusMessage = 'Not Found'

    if (req.url == '/' || req.url == '/index.js') {
        content = `<h1>欢迎来到首页</h1>`
        resp.statusCode = 200
        resp.statusMessage = 'ok'
    }

    if (req.url == "/about.html") {
        content = `<h1>欢迎来到关于</h1>`
        resp.statusCode = 200
        resp.statusMessage = 'ok'
    }
    resp.setHeader("Content-Type", "text/html; charset=utf-8")
    resp.end(content)
})

server.listen('8080', () => {
    console.log("http server run at http://127.0.0.1:8080")
})