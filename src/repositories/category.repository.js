const { Category } = require("../models")
const createCategory = async (payload) => {
    try {
        return await Category.create(payload);
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
};

const fetchAllCategories = async (payload) => {
    try {
        return await Category.find(payload).select("label value");
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
}

module.exports = { createCategory, fetchAllCategories }