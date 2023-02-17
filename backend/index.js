const { sequelize } = require("./src/models");
const express = require("express");
const app = express();
const path = require("path");
const port = 8020;
const cors = require("cors");
const { default: signup } = require("./routes/signup");

//SET UP MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//ROUTES
const Signup = require("./routes/signup");
const Login = require("./routes/login");

//ROUTES HANDLERS
app.get("/", (req, res) => {
  res.send("Server is running...");
});
app.use("/signup", Signup);
app.use("/login", Login);

//START SERVER & CONNECT TO DB
app.listen({ port: port }, async () => {
  console.log(`Client up on http://localhost:${port}`);
  await sequelize.authenticate();
  console.log("Database connected.");
});
