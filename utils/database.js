const Sequelize = require('sequelize')

const DB_NAME = 'node-todo'
const USER_NAME = 'vlad'
const PASSWORD = '1'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: '127.0.0.1',
    dialect: 'mysql',
})

module.exports = sequelize