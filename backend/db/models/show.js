'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "user_uuid" });
    }
  }
  Show.init(
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
      about: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Shows",
      modelName: "Show",
    }
  );
  return Show;
};