const { sequelize } = require("./src/models");
const express = require("express");
const app = express();
const path = require("path");
const port = 8020;
const cors = require("cors");

//SET UP MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//ROUTES HANDLERS
app.get("/", (req, res) => {
  res.send("Server is running...");
});

//START SERVER & CONNECT TO DB
app.listen({ port: port }, async () => {
  console.log(`Client up on http://localhost:${port}`);
  await sequelize.authenticate();
  console.log("Database connected.");
});
