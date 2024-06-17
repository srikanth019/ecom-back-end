const { httpsStatusCodes } = require("../constants/http-status-codes");
const { createUser, findUserByEmail, findUserById } = require("../repositories/user.repository");
const { errorResponse } = require("../utils/response.utils");

const addUser = async (req) => {
    const { email } = req.body;

    const user = await findUserByEmail(email)
    if (user) {
        throw errorResponse(httpsStatusCodes.ALREADY_EXISTS, "EMAIL_ALREADY_EXIST");
    }

    const userData = await createUser(req.body)
    return userData;
};

const fetchUser = async (req) => {
    const { id } = req.params;
    const user = await findUserById(id)
    if (!user) {
        throw errorResponse(httpsStatusCodes.NOT_FOUND, "USER_NOT_FOUND");
    }
    return user;
}

module.exports = { addUser, fetchUser };