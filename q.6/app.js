const express = require("express");
const schema = require('./joicode/code.js')

const app = express();
const PORT = 8000

app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
});
 
app.post("/", async (req, res) => {
    try {
        const { error } = await schema.validate(req.body);
        if (error){
            return res.send(error.details[0].message)
        }
        console.log('a', a);
        return res.send('<h1> Successfully Submitted </h1>');
    } catch (error) {
        console.log('error', error.message);
    }
})

app.listen(PORT, () => {
    console.log(`Server is Listening at ${PORT} Port.`);
})
