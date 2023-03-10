const express = require("express");
const router = express.Router();
const { sequelize, User, Station, Show } = require("../../db/models");
const useToken = require("../../hooks/useToken")

const CreateShow = async (req, res, next) => {
  try {
    const { name, about, } = req.body;
    const token = useToken()
    // const newShow = await Show.create({
    //   name: name,
    //   about: about,
    //   token: token,
    //   user_uuid: req.user.uuid
    // });
    // if(newShow) {
    //   res.send(newShow)
    // } else {
    //   throw {error: true, msg: "Show not created."}
    // }
    res.send(req.body)
  } catch (error) {
    res.send(error);
  }
};

module.exports = CreateShow;
