import http from 'http'
import url from 'url'
import fs from 'fs'

const PORT = 3000

const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true)

    switch (pathname) {
        case '/':
            res.writeHead(200, { "Content-type": "text/html" }).end("<h1>Overview Page</h1>")
            break
        case '/hero':
            res.writeHead(200, { "Content-type": "text/html" }).end("<h1>Hero Page</h1>")
            break
        default:
            res.writeHead(404, { "Content-type": "text/html" }).end("<h1>Page Not Found!</h1>")
            break
    }
})

server.listen(PORT, () => console.log(`http://localhost:${PORT}`))