const { DataTypes } = require('sequelize')
const db = require('../db')

const ModelName = db.define('modelName', {
    exampleProperty: {
        type: DataTypes.STRING
    }
})

module.exports = ModelName