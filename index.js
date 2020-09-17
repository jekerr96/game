const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set("view engine", "pug");
app.disable('x-powered-by');

app.get("/", (req, res) => {
    res.render("index", {title: "game", message: "hello world", pageType: "main"});
});

app.listen(port, () => {
    console.log(`server start on http://localhost:${port}`);
});