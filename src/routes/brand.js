const express = require('express')
const { createBrand, fetchAllBrands } = require('../controllers/brand.controller')

const router = express.Router()

router.post("/", createBrand)
router.get("/", fetchAllBrands)

module.exports = router 