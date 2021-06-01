const { DataTypes } = require('sequelize');
const db = require('../db');

const Redux = db.define(
    'redux-snippets',
    {
        id: {
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: true,

        },
        snippet: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
              },
        }
    },
    { timestamps: false },
)

module.exports = {Redux}