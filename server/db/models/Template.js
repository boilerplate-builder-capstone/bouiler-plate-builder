const { DataTypes } = require('sequelize');

const db = require('../db');

const Template = db.define('template', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  template: {
    type: DataTypes.JSON,
  }
});


module.exports = Template;
