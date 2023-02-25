'use strict';
const {Model} = require('sequelize');
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Station }) {
      // define association here
      this.hasOne(Station, { foreignKey: "user_id" }, { onDelete: "CASCADE" });
    }
    //hide values we don't want to be shown
    toJSON() {
      return {
        ...this.get(),
        //don't return the pw to client
        password: undefined,
      };
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
        type: DataTypes.STRING,
        allowNull: false,
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
        type: DataTypes.STRING(72),
        allowNull: false,
      },
    },
    {
      hooks: {
        //hash password before record is CREATED
        beforeCreate: (User) => {
        },
        //hash password before record is UPDATE
        beforeUpdate: (User) => {
        },
      },
      sequelize,
      tableName: "Users",
      modelName: "User",
    }
  );
  return User;
};