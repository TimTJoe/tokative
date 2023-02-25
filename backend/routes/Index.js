const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    JSON.stringify({
      session: req.session,
      user: req.user,
    })
  );
});

module.exports = router;
