// 导入模块
import { default as http } from 'http'
import { default as fs } from 'fs'
import { default as path } from 'path'

let html = '',css = '',js = ''

// 创建web服务器实例
const server = http.createServer()

server.on("request", (req, resp) => {
    console.log(path.resolve())

    let content = `<h1>404 Not Found</h1>`
    resp.statusCode = 404

    resp.statusMessage = 'Not Found'

    resp.setHeader("Content-Type", "text/html; charset=utf-8")
    if (req.url === '/clock' || req.url === '/' || req.url === '/clock/index.html') {
        content = html
        resp.statusCode = 200
        resp.statusMessage = 'ok'
    }
    if (req.url === '/clock/index.css' || req.url === '/index.css') {
        content = css
        resp.statusCode = 200
        resp.statusMessage = 'ok'
        resp.setHeader("Content-Type", "text/css; charset=utf-8")
    }

    if (req.url === '/clock/index.js' || req.url === '/index.js') {
        content = js
        resp.statusCode = 200
        resp.statusMessage = 'ok'
    }

    
    resp.end(content)
})

server.listen('8080', () => {
    console.log("http server run at http://127.0.0.1:8080")
    fs.readFile('./clock/index.html', 'utf-8', (err, data) => {
        if (err) {
            return
        }
        html = data
    })
    fs.readFile('./clock/index.css', 'utf-8', (err, data) => {
        if (err) {
            return
        }
        css = data
    })
    fs.readFile('./clock/index.js', 'utf-8', (err, data) => {
        if (err) {
            return
        }
        js = data
    })
})