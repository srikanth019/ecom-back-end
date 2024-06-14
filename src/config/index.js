require("dotenv").config()

const { config } = require("./global.config")
const { dbConfig } = require("./dbConfig")


module.exports = { config, dbConfig }