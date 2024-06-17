const { httpsStatusCodes } = require("../constants/http-status-codes");
const { successResponse } = require("../utils/response.utils");
const brandService = require("../services/brand.service")

exports.createBrand = async (req, res, next) => {
    try {
        const brand = await brandService.create(req);
        return successResponse(res, httpsStatusCodes.SUCCESS, "BRAND_CREATED_SUCCESSFULLY", brand)
    } catch (error) {
        next(error);
    }
}

exports.fetchAllBrands = async (req, res, next) => {
    try {
        const brands = await brandService.fetchAll(req);
        return successResponse(res, httpsStatusCodes.SUCCESS, "BRANDS_FETCHED_SUCCESSFULLY", brands)
    } catch (error) {
        next(error);
    }
}