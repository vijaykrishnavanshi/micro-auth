const express = require("express");
const router = express.Router();

router.route("/auth")
    .get((req, res) => {
        res.setHeader("Content-Type", "text/html");
        const loginForm = `<!DOCTYPE html> <html><body> Hello </body></html>`;
        res.write(loginForm);
        return res.end();
    })
    .post((req, res) => {
        console.log('req.query: ', req.query);
        return res.json(req.query);
    });

module.exports = router;
