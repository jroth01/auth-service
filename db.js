const Sequelize = require('sequelize')
const fs = require("fs")
const path = require("path")

// Load configuration based on environment
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '/config/config.json'))[env]

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

module.exports = sequelize
