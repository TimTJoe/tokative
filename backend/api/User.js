const express = require("express");
const router = express.Router();

//HANDLERS
const CreateUser = require("./user/CreateUser");
const GetUser = require("./user/GetUser");
const UpdateUser = require("./user/UpdateUser");
const DeleteUser = require("./user/DeleteUser");

//CREATE
router.post("/", CreateUser);
//READ
router.get("/", GetUser);
//UPDATE
router.put("/", UpdateUser);
//DELETE
router.delete("/", DeleteUser);

module.exports = router;
