"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    static associate({User}) {
      // define association here
      this.belongsTo(User, { foreignKey: "user_uuid" });
    }
  }
  Station.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      user_uuid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      frequency: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: {
          args: true,
          msg: "Frequency is taken.",
        },
        isDecimal: {
          args: true,
          msg: "Unaccepted frequency. Please try again.",
        },
      },
      about: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Stations",
      modelName: "Station",
    }
  );
  return Station;
};
