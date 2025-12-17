const http = require("http")
const url = require('url')


const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    res.setHeader("Content-Type", "text/html");
    res.write("Hello ");
    res.write("Hello World ");

    res.end();
});

server.listen(3000, () => {
    console.log("server started @ 3000");
});
