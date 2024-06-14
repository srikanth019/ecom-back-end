const userService = require("../services/user.service");
const { successResponse } = require("../utils/response.utils");
exports.createUser = async (req, res, next) => {
    try {
        const addProductRes = await userService.addUser(req, res, next);
        return successResponse(res, httpsStatusCodes.SUCCESS, "PRODUCT_CREATED_SUCCESSFULLY", addProductRes)
    } catch (error) {
        next(error);
    }
}