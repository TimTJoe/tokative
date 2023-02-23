const express = require("express");
const app = express();
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const session = require("express-session");
const bcrypt = require("bcryptjs");
const json = require("sequelize");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const { sequelize, User } = require("./src/models");
const bodyParser = require("body-parser");

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      secure: process.env.NODE_ENV === "production",
    },
  })
);
app.use(passport.initialize())
app.use(passport.session())
require("./passportConfig")(passport)


//ROUTES
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

app.post("/register", (req, res) => {
  User.findOne({ where: { email: req.body.email } }).then((user) => {
    if (user) res.send({ message: "Email already exists" });
    else {
      const newUser = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        gender: req.body.gender,
        password: req.body.password,

      });
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then((user) => res.send(user));
        })
      );
    }
  });
});
app.get("/user", (req, res) => {
  console.log(req.body);
});
app.get("/", (req, res) => {
  res.send("server running")
});

//START SERVER & CONNECT TO DB
app.listen({ port: port }, async () => {
  console.log(`Server up on http://localhost:${port}`);
  await sequelize.authenticate();
  console.log("Database connected.");
});
