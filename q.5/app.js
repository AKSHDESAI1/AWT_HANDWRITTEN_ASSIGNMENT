const express = require('express')
const mysql = require('mysql');
const router = require('./routes/web.js');

const app = express()
const port = process.env.PORT || 8000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
// app.use(express.json())
app.use(router);

app.set("view engine", "ejs");

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))