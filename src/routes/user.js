const express = require('express')
const { createUser, fetchUser, fetchUsers } = require('../controllers/user.controller')

const router = express.Router()

router.post("/", createUser)
router.get("/", fetchUsers)
router.get("/:id", fetchUser)

module.exports = router 