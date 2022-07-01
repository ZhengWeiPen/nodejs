import { default as path } from 'path';
import { default as fs } from 'fs';
import { default as http } from 'http';

const server = http.createServer()

const __dirname = path.resolve()

// 监听请求
server.on('request', async (req, resp) => {
    //设置请求头
    resp.setHeader("Content-Type", "text/html; charset=utf-8")

    // 路径拼接
    let fpath =  '' // path.join(__dirname, req.url)

    // 判断是否包含.css文件扩展名
    if(/\.(css)$/.test(req.url)) {
        resp.setHeader("Content-Type", "text/css; charset=utf-8")
    }

    if ( req.url === '/clock/index') {
        fpath = fpath+'.html'
    }

    // 使用async和await取出异步操作数据
    let data = await readFile(fpath).then((res) => {
        return res
    }).catch (err => {
        // 当找不到目标文件时
        return '<h1>404 Not Found<h1>'
    })
    resp.end(data)
})

// 文件读取
function readFile(fpath) {
    return new Promise((resolve, reject) => {
        fs.readFile(fpath,'utf-8',(err, data) => {
            if(err) {
                return reject(err)
            }
            resolve(data)
        })
    })
}

server.listen('8080', () => {
    console.log("http server run at http://127.0.0.1:8080")
})