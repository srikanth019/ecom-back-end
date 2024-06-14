const { httpsStatusCodes } = require("../constants/http-status-codes");
const { createProduct, getAllProductsWithPagination, productById, UpdateProduct, DeleteProduct, } = require("../repositories/product.repository");
const { getProductsPipeline } = require("../utils/products.utils");
const { errorResponse } = require("../utils/response.utils");

const addProduct = async (req) => {
    return await createProduct(req.body)
};

const fetchAllProductsWithPagination = async (req) => {
    const pipeline = getProductsPipeline(req)
    const [result] = await getAllProductsWithPagination(pipeline)

    if (!result) {
        throw errorResponse(httpsStatusCodes.INTERNAL_SERVER_ERROR, "Couldn't fetch all products");
    }
    const { data, totalCount } = result;
    const response = { products: data, totalCount: totalCount.length > 0 ? totalCount[0].count : 0, };

    return response;
};


const fetchProductById = async (req) => {
    const { id } = req.params;
    const result = await productById(id)
    if (!result) {
        throw errorResponse(httpsStatusCodes.INTERNAL_SERVER_ERROR, "Couldn't fetch product");
    }
    return result;
}

const updateProduct = async (req) => {
    const { id } = req.params;
    const productData = req.body
    const result = await UpdateProduct(id, productData)
    if (!result) {
        throw errorResponse(httpsStatusCodes.INTERNAL_SERVER_ERROR, "Couldn't update product");
    }
    return result;
}

const deleteProduct = async (req) => {
    const { id } = req.params;
    const result = await DeleteProduct(id)
    if (!result) {
        throw errorResponse(httpsStatusCodes.INTERNAL_SERVER_ERROR, "Couldn't delete product");
    }
    return result;
}

module.exports = { addProduct, fetchAllProductsWithPagination, fetchProductById, updateProduct, deleteProduct }