'use strict';
const {Model} = require('sequelize');
const bcrypt = require("bcryptjs");

const hashPassword = async (model) => {
  if (model.password) {
    const salt = await bcrypt.genSaltSync(10, "a");
    model.password = bcrypt.hashSync(model.password, salt);
  }
};


module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      fullname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email address already in use!",
        },
      },
      gender: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        //hash password before record is CREATED
        beforeCreate: (User) => {
          hashPassword(User);
        },
        //hash password before record is UPDATE
        beforeUpdate: (User) => {
          hashPassword(User);
        },
      },
      sequelize,
      tableName: "Users",
      modelName: "User",
    }
  );
  return User;
};