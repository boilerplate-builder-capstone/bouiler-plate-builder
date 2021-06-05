const { DataTypes } = require('sequelize');
const db = require('../../db');

const ReactModel = db.define(
  'react',
  {
    id: {
      primaryKey: true,
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

module.exports = ReactModel;
