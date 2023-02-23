const { sequelize, User } = require("./src/models");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local");

module.exports = function (passport) {
  passport.use(
    new localStrategy( { usernameField: "email" },
        function (email, password, done) {
        User.findOne({ where: { email } }).then((user) => {
          if (!user) {
            return done(null, false, {
              message: "That email is not registered",
            });
          } //if users ends
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "Password incorrect" });
            }
          }); //bcrypt ends
        }); //findone ends
      } //email func ends
    )//localstrategy ends
  ); //passport use ends

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  }); //serialize ends
  passport.deserializeUser((id, cb) => {
    User.findOne({ where: { id: id } }).then((user) => {
      cb(null, user);
    });
  }); //deserialize ends
}; //module ends
