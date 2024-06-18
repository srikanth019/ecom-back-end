const express = require('express')

const router = express.Router()

router.use("/products", require("./product"))
router.use("/users", require("./user"))
router.use("/auth", require("./auth"))
router.use("/categories", require("./category"))
router.use("/brands", require("./brand"))
router.use("/carts", require("./cart"))
// router.use("/orders", require("./order"))

module.exports = router