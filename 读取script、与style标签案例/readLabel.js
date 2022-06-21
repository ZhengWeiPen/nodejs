import { default as path } from "path";
import { default as fs } from "fs";

class ReadLabel {
    constructor (options) {
        let {cssName,scriptName,htmlName,storagePath,readPath} = options;
        this.cssName = cssName
        this.scriptName = scriptName
        this.htmlName = htmlName
        this.storagePath = storagePath
        this.readPath = readPath
        this.regularScript = options.regularScript || /<script>[\s\S]*<\/script>/
        this.regularCss = options.regularScript || /<style>[\s\S]*<\/style>/
        this.init()
    }

    init () {
        fs.readFile(this.readPath, "utf-8", (err, data) => {
            if (err) {
                return null;
            }
            this.readScript(data)
            this.readCss(data)
            this.readHtml(data)
        })
    }


    // 读取html
    readHtml(data) {
        let html = data.replace(this.regularCss, `<link rel="stylesheet" href="${this.cssName}">`).replace(this.regularScript, `<script src="${this.scriptName}" type="text/javascript"></script>`)
        fs.writeFile(path.join(this.storagePath, this.htmlName),html, (err) => {
            console.log(err)
        })
    }

    // 读取style标签中的css

    readCss(data) {
        let styletTxt = data.match(this.regularCss)[0]

        styletTxt = styletTxt.replace('<style>', '').replace("</>", '')

        fs.writeFile(path.join(this.storagePath, this.cssName),styletTxt, (err) => {
            console.log(err)
        })
    }

    // 读取script标签中的js
    readScript(data) {
        let scriptTxt = data.match(this.regularScript)[0]

        scriptTxt = scriptTxt.replace('<script>', '').replace("</script>", '')

        fs.writeFile(path.join(this.storagePath, this.scriptName),scriptTxt, (err) => {
            console.log(err)
        })
    }
}


new ReadLabel({
    cssName: 'index.css',
    scriptName: 'index.js',
    htmlName: 'index.html',
    storagePath: path.join(path.resolve(), './clock'),
    readPath: path.join(path.resolve(), "./index.html"),
})

