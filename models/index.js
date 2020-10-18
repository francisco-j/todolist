const  {Sequelize,DataTypes} = require('sequelize')

const env = process.env.NODE_ENV
const config = require('../config/config.json')[env]

const sequelize = (env=="development")
    ? new Sequelize(config.database, config.username, config.password, config)
    : new Sequelize(process.env.DATABASE_URL, config);

const User = require('./user')(sequelize, DataTypes)
const Task = require('./task')(sequelize, DataTypes)

module.exports = {
    sequelize,
    User,
    Task
}