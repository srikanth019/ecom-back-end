const { Product } = require("../models")
const createProduct = async (payload) => {
    try {
        return await Product.create(payload);
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
};

const getAllProductsWithPagination = async (payload) => {
    try {
        return await Product.aggregate(payload);
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
};

const productById = async (payload) => {
    try {
        return await Product.findById(payload);
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
}

const UpdateProduct = async (id, data) => {
    try {
        return await Product.findOneAndUpdate({ _id: id }, data, { new: true });
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
}

const DeleteProduct = async (id) => {
    try {
        return await Product.findByIdAndDelete(id);
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
}

module.exports = { createProduct, getAllProductsWithPagination, productById, UpdateProduct, DeleteProduct }