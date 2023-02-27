const express = require("express");
const router = express.Router();

router.delete("/", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.send({
      success: true,
      message: "Logout successful.",
    });
  });
});

module.exports = router;
