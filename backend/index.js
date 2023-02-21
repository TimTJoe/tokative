const { sequelize } = require("./src/models");
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT
const cors = require("cors");
const session = require("express-session");
const Passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
//ROUTES
const Signup = require("./routes/signup");
const Login = require("./routes/login");
const Station = require("./routes/station");
const User = require("./routes/user");
const cookieParser = require("cookie-parser");

//SET UP SESSION
app.use(session({
  name: process.env.SESSION_NAME,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  // cookie: {
  //   maxAge: parseInt(process.env.SESSION_LIFETIME),
  //   sameSite: true,
  //   secure: process.env.NODE_ENV === "production"

  // }
}));

// MIDDLEWARE & SESSION 
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(cors(
  {
    origin: process.env.CLIENT_URL,
    credentials: true
    
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


//ROUTES HANDLERS
app.get("/", (req, res) => {
  req.session.userID = 1234
  res.send(req.session);
});
app.use("/login", Login);
app.use("/signup", Signup);
app.use("/station", Station);

//USER ROUTE
app.use("/user", User)

//404 HANDLER
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
//ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message)
});

//START SERVER & CONNECT TO DB
app.listen({ port: port }, async () => {
  console.log(`Client up on http://localhost:${port}`);
  await sequelize.authenticate();
  console.log("Database connected.");
});
