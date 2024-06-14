const express = require('express')

const router = express.Router()

router.use("/products", require("./product"))
router.use("/users", require("./user"))
router.use("/auth", require("./auth"))

module.exports = router