const { httpsStatusCodes } = require('../constants/http-status-codes');
const { Product } = require('../models/index');
const productService = require("../services/product.service");
const { successResponse } = require('../utils/response.utils');

exports.createProduct = async (req, res, next) => {
    try {
        const addProductRes = await productService.addProduct(req, res, next);
        return successResponse(res, httpsStatusCodes.SUCCESS, "PRODUCT_CREATED_SUCCESSFULLY", addProductRes)
    } catch (error) {
        next(error);
    }
}

exports.fetchAllProductsWithPagination = async (req, res, next) => {
    try {
        const products = await productService.fetchAllProductsWithPagination(req, res, next);
        return successResponse(res, httpsStatusCodes.SUCCESS, "PRODUCTS_FETCHED_SUCCESSFULLY", products)
    } catch (error) {
        console.log(/error/, error);
        next(error);
    }
};

exports.fetchProductById = async (req, res, next) => {
    try {
        const product = await productService.fetchProductById(req)
        return successResponse(res, httpsStatusCodes.SUCCESS, "PRODUCT_FETCHED_SUCCESSFULLY", product)
    } catch (error) {
        next(error);
    }
};

exports.updateProduct = async (req, res, next) => {
    try {
        const product = await productService.updateProduct(req)
        return successResponse(res, httpsStatusCodes.SUCCESS, "PRODUCT_UPDATED_SUCCESSFULLY", product)
    } catch (error) {
        next(error);
    }
};

exports.deleteProduct = async (req, res, next) => {
    try {
        await productService.deleteProduct(req)
        return successResponse(res, httpsStatusCodes.SUCCESS, "PRODUCT_DELETED_SUCCESSFULLY", {})
    } catch (error) {
        next(error);
    }
};