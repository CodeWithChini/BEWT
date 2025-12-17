const http = require('http')
const url = require('url')

const app = http.createServer((req, res) => {
    if (req.url == '/') {
        res.setHeader('content-type','type/plain')
        res.statusCode = 200
        res.end('Home Page')
    }
    else if (req.url == '/about') {
        res.statusCode = 200
        res.end('about Page')
    }
     else if (req.url == '/contect') {
        res.statusCode = 200
        res.end('contect Page')
    }
     else if (req.url == '/blog') {
        res.statusCode = 200
        res.end('blog Page')
    }
     else if (req.url == '/info') {
        res.statusCode = 200
        res.end('info Page')
    }
    else {
        res.statusCode = 404
        res.end('page not found')
    }
})

app.listen(3001, () => {
    console.log('port start at @ 3001');
})
