const { Brand } = require("../models")
const createBrand = async (payload) => {
    try {
        return await Brand.create(payload);
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
};


const fetchAllBrands = async (payload) => {
    try {
        return await Brand.find(payload).select("label value");
    } catch (error) {
        // logger.error("error: ", error);
        throw new Error(error);
    }
}



module.exports = { createBrand, fetchAllBrands }