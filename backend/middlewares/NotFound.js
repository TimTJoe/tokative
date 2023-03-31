const router = require("express").Router()

const NotFound = (req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
};
module.exports = NotFound

// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });
