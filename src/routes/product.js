const express = require('express')
const { createProduct, fetchAllProductsWithPagination, fetchProductById, updateProduct, deleteProduct } = require('../controllers/product.controller')

const router = express.Router()

router.post("/", createProduct)
router.get("/", fetchAllProductsWithPagination)
router.get("/:id", fetchProductById)
router.patch("/:id", updateProduct)
router.delete("/:id", deleteProduct)

module.exports = router 