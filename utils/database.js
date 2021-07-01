const Sequelize = require('sequelize')

const DB_NAME = 'niwrpxw4kr5nk98e'
const USER_NAME = 'mmuh3vp6zhvmp1ai'
const PASSWORD = 'sby9avp741f0vrdd'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'esilxl0nthgloe1y.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    dialect: 'mysql',
})

module.exports = sequelize