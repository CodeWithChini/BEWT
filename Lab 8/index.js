const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.get('/users', (req, res) => {
    res.send(req.query);
})

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    res.send(`name:${name}, Email: ${email}, Password : ${password}`)
})

app.get("/user/:id", (req, res) => {
    res.send(req.params.id);
})

app.use((req, res) => {
    res.status(404).send("Page Not Found")
})

app.listen(3000, () => {
    console.log("Port start at @3000");
})
