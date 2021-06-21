const { DataTypes } = require('sequelize');
const db = require('../db');

const Comment = db.define(
  'comment',
  {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
);

module.exports = Comment;