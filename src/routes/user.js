const express = require('express')
const { createUser, fetchUser } = require('../controllers/user.controller')

const router = express.Router()

router.post("/", createUser)
router.get("/:id", fetchUser)

module.exports = router 