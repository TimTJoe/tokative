const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    req.logout();
    res.send("Logged out");
});

module.exports = router;
