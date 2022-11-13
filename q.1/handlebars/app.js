const express = require("express");
const handlebars = require('express-handlebars');
const path = require("path");
const { body, validationResult } = require('express-validator');

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

app.get("/", (req, res) => {
    res.render("home")
})

app.post("/",
    body('email', 'Must be an Email').isEmail(),
    body('phone', 'Minimum Length of number must be 10').isLength({ min: 10 }),
    (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.send("<h1> Successfully Submit </h1>")
    })

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT} Port.`);
})
