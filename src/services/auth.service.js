const { httpsStatusCodes } = require("../constants/http-status-codes");
const { findUserByEmail } = require("../repositories/user.repository");
const { errorResponse } = require("../utils/response.utils");

const login = async (req) => {
    const { email, password } = req.body;

    const user = await findUserByEmail(email)
    if (!user) {
        throw errorResponse(httpsStatusCodes.ALREADY_EXISTS, "ACCOUNT_NOT_FOUND");
    }
    if (!user.isPasswordCorrect(password)) {
        throw errorResponse(httpsStatusCodes.UNAUTHORIZED, "PASSWORD_INCORRECT");
    }
    user.password = undefined;
    return user;
};

module.exports = { login }
