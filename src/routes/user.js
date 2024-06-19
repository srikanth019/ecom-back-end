const express = require('express')
const { createUser, fetchUser, fetchUsers, updateUser } = require('../controllers/user.controller')

const router = express.Router()

router.post("/", createUser)
router.get("/", fetchUsers)
router.get("/:id", fetchUser)
router.patch("/:id", updateUser)

module.exports = router 