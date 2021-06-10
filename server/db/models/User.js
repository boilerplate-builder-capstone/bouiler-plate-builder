const { DataTypes, UUIDV4 } = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // id: {
  //   primaryKey: true,
  //   type: DataTypes.UUID,
  //   defaultValue: DataTypes.UUIDV4,
  //   allowNull: false,
  //   unique: true,
  // },
  github: {
    type: DataTypes.JSON,
  },
});

module.exports = User;
