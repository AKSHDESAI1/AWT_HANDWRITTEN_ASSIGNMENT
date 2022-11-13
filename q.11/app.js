const express = require('express');
const ejs = require('ejs');
const transporter = require("./config/emailConfig.js");

const app = express();
const PORT = 8000;

// Set Template Engine 
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    return res.render("index");
});

app.post("/", async (req, res) => {
    const { email } = req.body;

    try {
        let info = await transporter.sendMail({
            from: "laughtercomedy708@gmail.com", // sender address
            to: email, // list of receivers
            subject: "Express - Nodemailer", // Subject line
            text: " Email Send Successfuly.", // plain text body
        })
        return res.json({ "status": "success", "message": "Password Reset Email Sent... Please Check your Email."})
    } catch (error) {
        return res.json({ "status1": "failed", "message": error.message })
    }
})

app.listen(PORT, () => {
    console.log(`Server is Listening at ${PORT} Port.`);
})