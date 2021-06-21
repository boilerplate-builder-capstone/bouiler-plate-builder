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
    post: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
);

module.exports = Post;