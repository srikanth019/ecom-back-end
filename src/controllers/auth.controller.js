const { httpsStatusCodes } = require("../constants/http-status-codes");
const authService = require("../services/auth.service");
const { successResponse } = require("../utils/response.utils");
exports.login = async (req, res, next) => {
    try {
        const addProductRes = await authService.login(req);
        return successResponse(res, httpsStatusCodes.SUCCESS, "PRODUCT_CREATED_SUCCESSFULLY", addProductRes)
    } catch (error) {
        next(error);
    }
}