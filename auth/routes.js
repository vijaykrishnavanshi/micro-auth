const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const router = express.Router();

router.route("/auth")
    .get((req, res) => {
        return res.sendFile(__dirname + '/public/index.html');
    })
    .post((req, res) => {
        console.log('req.body: ', req.body);
        return res.redirect(`${process.env.TRAVEL_SERVICE_URL}/confirm?token=${req.body.username}`);
    });

module.exports = router;
