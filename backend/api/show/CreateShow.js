const express = require("express");
const router = express.Router();
const { sequelize, User, Station, Show } = require("../../db/models");
const useToken = require("../../hooks/useToken");

const CreateShow = async (req, res, next) => {
  const { name, about } = req.body;
  const user_uuid = req.user.uuid
  const token = useToken();
  
  try {
    const newShow = new Show({
      user_uuid: user_uuid,
      name: name,
      about: about,
      token: token
    })
    newShow.save().then((show) => {
      res.send(show)
    })
  } catch (error) {
    res.send(error);
  }
};

module.exports = CreateShow;
