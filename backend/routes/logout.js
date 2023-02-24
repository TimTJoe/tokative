const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    req.logout();
    req.session = null
    res.send("Logged out");
});

router.delete("/", (req, res, next) => {
    req.logout(function(err) {
        if(err) { return next(err)}
        res.send({
            message: "logout!"
        })
    })
})

router.post("/", (req, res, next) => {
    req.logout(function(err) {
        if(err) { return next(err)}
        res.send({
            message: "logout!"
        })
    })
})

module.exports = router;
