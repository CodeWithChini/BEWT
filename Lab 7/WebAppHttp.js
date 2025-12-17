const http = require('http')

const app = http.createServer((req, res) => {
    res.end("Hello World!!")
});

app.listen(3000, () => {
    console.log("Server started at port @ 3000");
});
