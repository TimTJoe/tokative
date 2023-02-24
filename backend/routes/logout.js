const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    req.logout();
    req.session = null
    res.send("Logged out");
});

module.exports = router;
