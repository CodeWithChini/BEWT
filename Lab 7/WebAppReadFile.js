const http = require('http')
const fs = require('fs')

const app = http.createServer((req, res) => {
    if (res.url == '/about') {
        fs.read('info.txt', (err, data) => {
            if (err) {
                res.end('error');
            }
            res.end(data);
        })
    }
})

app.listen(3000, () => {
    console.log('port runnig at @ 3000')
})
