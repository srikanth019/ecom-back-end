const express = require('express')
const { createCategory, fetchAllCategories } = require('../controllers/category.controller')

const router = express.Router()

router.post("/", createCategory)
router.get("/", fetchAllCategories)

module.exports = router 