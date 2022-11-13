const express = require("express");
const handlebars = require('express-handlebars');
const path = require("path");

const app = express();
const PORT = 8000;

const hbs = handlebars.create({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, 'views/layout')
});

app.engine("hbs", hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));

app.get("/signin", (req, res) => {
    res.render("signin", {
        title: "SIGNIN PAGE"
    });
})
app.get("/signup", (req, res) => {
    res.render("signup", {
        title: "SIGNUP PAGE"
    });
})


app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT} Port.`);
})
