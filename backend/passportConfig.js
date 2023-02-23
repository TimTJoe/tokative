const { User } = require("./src/models")
const bcrypt = require("bcryptjs")
const localStrategy = require("passport-local")

module.exports = function (passport) {
    passport.use(
        new localStrategy((email, password, done) => {
            User.findOne({ where: email }, (err, user) => {
                if (err) throw err
                if (!user) return done(null, false, {message: "The email is not registered."});
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err
                    if (isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false, {message: "Password is incorrect."})
                    }
                })
            })
        })
    )
    passport.serializeUser((user, cb) => {
        cb(null, user.id)
    })
    passport.deserializeUser((id, cb) => {
        User.findOne({ where: id }, (err, user) => {
            cb(err, user)
        })
    })
}