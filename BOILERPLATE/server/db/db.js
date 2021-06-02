const Sequelize = require('sequelize')

const dbName = 'capstonetest'
const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost/${dbName}`)

module.exports = db