const { User } = require("../models")
const createUser = async (payload) => {
    try {
        return await User.create(payload);
    } catch (error) {
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

//find user by email
const findUserByEmail = async (email) => {
    try {
        return await User.findOne({ email });
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

module.exports = { createUser, findUserByEmail, }