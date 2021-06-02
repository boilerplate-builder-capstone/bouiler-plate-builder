const { DataTypes } = require('sequelize')
const db = require('../db')

const OtherModelName = db.define('otherModelName', {
    exampleProperty: {
        type: DataTypes.STRING
    }
})

module.exports = OtherModelName