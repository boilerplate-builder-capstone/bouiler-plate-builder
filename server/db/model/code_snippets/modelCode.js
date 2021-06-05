const { DataTypes } = require('sequelize');
const db = require('../../db');

const Code = db.define(
  'code',
  {
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    filenName: {
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

module.exports = Code;
