const { httpsStatusCodes } = require("../constants/http-status-codes");
const userService = require("../services/user.service");
const { successResponse } = require("../utils/response.utils");
exports.createUser = async (req, res, next) => {
    try {
        const addProductRes = await userService.addUser(req, res, next);
        return successResponse(res, httpsStatusCodes.SUCCESS, "PRODUCT_CREATED_SUCCESSFULLY", addProductRes)
    } catch (error) {
        console.log(error);
        next(error);
    }
}

//get user information
exports.fetchUser = async (req, res, next) => {
    try {
        const user = await userService.fetchUser(req);
        return successResponse(res, httpsStatusCodes.SUCCESS, "USER_FETCHED_SUCCESSFULLY", user)
    } catch (error) {
        next(error);
    }
}

//get users information
exports.fetchUsers = async (req, res, next) => {
    try {
        const user = await userService.fetchAll(req);
        return successResponse(res, httpsStatusCodes.SUCCESS, "USER_FETCHED_SUCCESSFULLY", user)
    } catch (error) {
        next(error);
    }
}
