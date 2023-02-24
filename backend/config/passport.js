const { sequelize, User } = require("../src/models");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local");

module.exports = function (passport) {
  passport.use(
    new localStrategy(
      { usernameField: "email", passwordField: "password" },
      function (email, password, done) {
        User.findOne({ where: { email: email } }).then((user) => {
          if (!user) {
            return done(null, false, {
              name: "email",
              message: "Email is not registered",
            });
          } //if users ends
           bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {throw (err)}
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, {
                name: "password",
                message: "Password is incorrect"
              });
            }
          }); //bcrypt ends
        }); //findone ends
      } //email func ends
    ) //localstrategy ends
  ); //passport use ends

  passport.serializeUser((user, cb) => {
    cb(null, user.uuid);
  }); //serialize ends
  passport.deserializeUser((uuid, cb) => {
    User.findOne({ where: { uuid: uuid } }).then((user) => {
      cb(null, user);
    });
  }); //deserialize ends
}; //module ends
