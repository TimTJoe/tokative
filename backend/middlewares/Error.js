const router = require("express").Router();

const Error = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
};
module.exports = Error;

//ERROR HANDLER
// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send(err.message);
// });
