const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get('/about', (req, res) => {
    res.send("About Page")
})

app.get('/contect', (req, res) => {
    res.send("Contect Page")
})

app.get('/blog', (req, res) => {
    res.send("Blog Page")
})

app.get('/info', (req, res) => {
    res.send("Info Page")
})

app.use((req, res) => {
    res.status(404).send("Page Not Found")
})

app.listen(3000, () => {
    console.log("Port start at @3000");
})
