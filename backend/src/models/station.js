"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    static associate({User}) {
      // define association here
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Station.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      frequency: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Frequency is taken.",
        },
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      owner: {
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
