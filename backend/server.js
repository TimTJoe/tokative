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

//MIDDLEWARE
app.use(express.json());
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(passport.initialize())
app.use(passport.session())
require("./passportConfig")(passport)

app.use(express.urlencoded({ extended: true }));
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
  })
);

//ROUTES

app.post("/login", (req, res) => {
  console.log(req.body);
});
app.post("/register", (req, res) => {
  console.log(req.body);
});
app.get("/user", (req, res) => {
  console.log(req.body);
});

//START SERVER & CONNECT TO DB
app.listen({ port: port }, async () => {
  console.log(`Server up on http://localhost:${port}`);
  await sequelize.authenticate();
  console.log("Database connected.");
});
