const { DataTypes } = require('sequelize');
const db = require('../db');

const Post = db.define(
  'post',
  {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    post: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    repo: {
      type: DataTypes.STRING,
      defaultValue: false
    }
  },
);

module.exports = Post;