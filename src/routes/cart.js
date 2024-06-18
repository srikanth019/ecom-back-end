const express = require('express')
const { createBrand, fetchAllBrands } = require('../controllers/brand.controller')
const { addToCart, fetchAllCarts, fetchCartByUserId, deleteItemFromCart, updateCart } = require('../controllers/cart.controller')

const router = express.Router()

router.post("/", addToCart)
router.get("/", fetchAllCarts)
router.get("/:userId", fetchCartByUserId)
router.delete("/:cartId", deleteItemFromCart)
router.patch("/:cartId", updateCart)

module.exports = router 