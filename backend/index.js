const { sequelize } = require("./db/models");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv").config({ path: "./config/config.env" });
const port = process.env.PORT;
const { Server } = require("socket.io")
const radio = new Server(server, {
  path: "/studio",
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
  }
})
//SOCKET.IO NAMESPACES
// const radio = io.of("/studio")
// const show = io.of("/show")

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
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
      maxAge: 1000 * 60 * 60 * 24, //1 day
      secure: process.env.NODE_ENV === "production",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

//HOOKS
const useAuth = require("./hooks/useAuth");

//ROUTES
const NotFound = require("./middlewares/NotFound");
const Error = require("./middlewares/Error");

const Home = require("./routes");
const Login = require("./auth/login");
const Logout = require("./auth/logout");
const User = require("./api/User");
const Station = require("./api/Station");
const Studio = require("./api/Studio");
const Radio = require("./api/Radio");
const Show = require("./api/Show");


//ROUTES MIDDLEWARE HANDLERS (CRUD MIDDLEWARE)
app.get("/", Home);
app.use("/login", Login);
app.use("/logout", useAuth, Logout);
app.use("/user", useAuth, User);
app.use("/station", useAuth, Station);
app.use("/studio", useAuth, Studio);
app.use("/show", useAuth, Show);

//HANDLING SOCKET.IO/WEBSOCKET CONNECTION
radio.on("connection", Radio)

//404 & Router Error Handlers
app.use(NotFound);
app.use(Error);

//START SERVER & CONNECT TO PostgreSQL DB
server.listen({ port: port }, async () => {
  console.log(`Client up on http://localhost:${port}`);
  await sequelize.authenticate();
  console.log("Database connected.");
});
