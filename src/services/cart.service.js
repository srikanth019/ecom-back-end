const { httpsStatusCodes } = require("../constants/http-status-codes");
const { addToCart, fetchCartByUserId, fetchAllCarts, deleteCartItem, updateCart } = require("../repositories/cart.repository");
const { errorResponse } = require("../utils/response.utils");

const create = async (req) => {
    const cart = await addToCart(req.body)
    return await cart.populate('product');
};

const fetchByUserId = async (req) => {
    const { userId } = req.params
    const filter = { is_deleted: false, user: userId }
    return await fetchCartByUserId(filter)
};

const fetchAll = async () => {
    const filter = { is_deleted: false, }
    return await fetchAllCarts(filter)
};

const deleteItem = async (req) => {
    const { cartId } = req.params
    return await deleteCartItem(cartId)
};

const update = async (req) => {
    const { cartId } = req.params;
    const cartData = req.body
    const result = await updateCart(cartId, cartData)
    if (!result) {
        throw errorResponse(httpsStatusCodes.INTERNAL_SERVER_ERROR, "Couldn't update product");
    }
    return await result.populate("product");
}

module.exports = { create, fetchByUserId, fetchAll, deleteItem, update }