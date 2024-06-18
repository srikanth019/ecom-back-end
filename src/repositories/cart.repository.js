const { Cart } = require("../models")
const addToCart = async (payload) => {
    try {
        return await Cart.create(payload);
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
};


const fetchCartByUserId = async (payload) => {
    try {
        const carts = await Cart.find(payload).populate("product");
        // Transform the result to include user data as 'userData'
        return carts.map(cart => {
            const cartObj = cart.toObject();
            cartObj.productData = cartObj.productId;
            delete cartObj.productId;
            return cartObj;
        });
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
}

const fetchAllCarts = async (payload) => {
    try {
        return await Cart.find(payload)
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
}


const deleteCartItem = async (id) => {
    try {
        return await Cart.findByIdAndDelete({ _id: id })
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
}

const updateCart = async (id, data) => {
    try {
        return await Cart.findOneAndUpdate({ _id: id }, data, { new: true });
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
}

module.exports = { addToCart, fetchCartByUserId, fetchAllCarts, deleteCartItem, updateCart }