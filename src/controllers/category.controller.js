const { httpsStatusCodes } = require("../constants/http-status-codes");
const { successResponse } = require("../utils/response.utils");
const categoryService = require("../services/category.service")

exports.createCategory = async (req, res, next) => {
    try {
        const category = await categoryService.create(req);
        return successResponse(res, httpsStatusCodes.SUCCESS, "CATEGORY_CREATED_SUCCESSFULLY", category)
    } catch (error) {
        next(error);
    }
}

exports.fetchAllCategories = async (req, res, next) => {
    try {
        const categories = await categoryService.fetchAll(req);
        return successResponse(res, httpsStatusCodes.SUCCESS, "CATEGORIES_FETCHED_SUCCESSFULLY", categories)
    } catch (error) {
        next(error);
    }
}