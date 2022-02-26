const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/js/script.js') {
        const script  = fs.readFileSync(path.resolve(__dirname, '..', 'js', 'script.js'), 'utf-8')
        res.writeHead(200, {
            "Content-type": "text/js"
        })
        res.end(script)
    } else if (req.url === '/styles/style.css') {
        const style  = fs.readFileSync(path.resolve(__dirname, '..', 'styles', 'style.css'), 'utf-8')
        res.writeHead(200, {
            "Content-type": "text/css"
        })
        res.end(style)
    } else {
        const page  = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')
        res.writeHead(200, {
            "Content-type": "text/html"
        })
        res.end(page)
    }
})

server.listen(6543, 'localhost', () => {
    console.log('Server is listening on 6543...')
})