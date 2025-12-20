const express = require('express')
const fs = require('fs')
const app = express();

app.get('/', (req, res) => {
    fs.read('info.txt', (err, data) => {
            if (err) {
                res.end('error');
            }
            res.end(data);
        })
})

app.listen(3000, () => {
    console.log('port runnig at @ 3000')
})
