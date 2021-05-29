const { DataTypes } = require('sequelize');
const db = require('../../db');

const Server = db.define(
  'server',
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    snippet: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);

module.exports = Server;
