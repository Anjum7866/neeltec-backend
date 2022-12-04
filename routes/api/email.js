const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

// send mail
router.post("/register",  (req, res) => {
    const { email } = req.body;
    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.USER,
            to: email,
            subject: "Jobsheet successfully filled",
            html: '<h1>Congratulation</h1> <h1> You successfully fill the jobsheet </h2>'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({status:201,info})
            }
        })

    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }
});


module.exports = router;