const { httpsStatusCodes } = require("../constants/http-status-codes");
const { successResponse } = require("../utils/response.utils");
const cartService = require("../services/cart.service")

exports.addToCart = async (req, res, next) => {
    try {
        const brand = await cartService.create(req);
        return successResponse(res, httpsStatusCodes.SUCCESS, "ITEM_ADDED_TO_CART_SUCCESSFULLY", brand)
    } catch (error) {
        next(error);
    }
}

exports.fetchCartByUserId = async (req, res, next) => {
    try {
        const brands = await cartService.fetchByUserId(req);
        return successResponse(res, httpsStatusCodes.SUCCESS, "CARTS_FETCHED_SUCCESSFULLY", brands)
    } catch (error) {
        next(error);
    }
}

exports.fetchAllCarts = async (req, res, next) => {
    try {
        const brands = await cartService.fetchAll(req);
        return successResponse(res, httpsStatusCodes.SUCCESS, "CARTS_FETCHED_SUCCESSFULLY", brands)
    } catch (error) {
        next(error);
    }
}

exports.deleteItemFromCart = async (req, res, next) => {
    try {
        const brands = await cartService.deleteItem(req);
        return successResponse(res, httpsStatusCodes.SUCCESS, "CARTS_ITEM_DELETED_SUCCESSFULLY", brands)
    } catch (error) {
        next(error);
    }
}

exports.updateCart = async (req, res, next) => {
    try {
        const product = await cartService.update(req)
        return successResponse(res, httpsStatusCodes.SUCCESS, "PRODUCT_UPDATED_SUCCESSFULLY", product)
    } catch (error) {
        next(error);
    }
};