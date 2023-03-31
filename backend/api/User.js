const express = require("express");
const router = express.Router();

//HANDLERS
const CreateUser = require("./user/CreateUser");
const GetUser = require("./user/GetUser");
const GetByUUID = require("./user/GetByUUID");
const UpdateUser = require("./user/UpdateUser");
const DeleteUser = require("./user/DeleteUser");

//CREATE
router.post("/", CreateUser);
//READ
router.get("/", GetUser);
router.get("/:uuid", GetByUUID);
//UPDATE
router.put("/", UpdateUser);
//DELETE
router.delete("/", DeleteUser);

module.exports = router;
