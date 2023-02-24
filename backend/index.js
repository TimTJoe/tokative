const { sequelize, User } = require("./src/models");
const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv").config({
    path: "./config/config.env",
});
const port = process.env.PORT;

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(
  session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,//1 day
      secure: process.env.NODE_ENV === "production",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

//ROUTES
const Signup = require("./routes/signup");
const Login = require("./routes/login");
const Station = require("./routes/station");
const Logout = require("./routes/logout");

//CHECKER/AUTHENTICATORS
const isAuth = require("./auth/isAuth")
//ROUTES HANDLERS
app.get("/", (req, res) => {
  res.send(req.session);
});
app.use("/login", Login);
app.use("/logout", Logout);
app.use("/signup", Signup);
app.use("/station", isAuth, Station);

//USER ROUTE
app.use("/user", User);

//404 HANDLER
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
//ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

//START SERVER & CONNECT TO DB
app.listen({ port: port }, async () => {
  console.log(`Client up on http://localhost:${port}`);
  await sequelize.authenticate();
  console.log("Database connected.");
});
