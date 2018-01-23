// Dependences
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const fs = require("fs")
const path = require("path")

// App declaration
const app = express()

// Load configuration based on environment
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '/config/config.json'))[env]

// Middleware
app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Use database configuration settings from config.json
//require('./db')(Sequelize, config);

// Use API endpoints declared in separate module
require('./routes')(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'))
