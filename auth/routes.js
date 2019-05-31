const express = require("express");
const router = express.Router();

router.route("/auth").post(
  (req, res) => {
    console.log('req.query: ', req.query);
    return res.json(req.query);
  }
);

module.exports = router;
