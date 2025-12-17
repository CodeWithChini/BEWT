const express = require("express");

const app = express();
app.get("/login", (res, req) => {
    res.setEncoding("Hello World Express ")
});

app.get("/logout", (res, req) => {
    res.setEncoding("Log out Express ")
});

app.listen(3000, () => {
    console.log("Web server started @ 3000");

})
