const { httpsStatusCodes } = require("../constants/http-status-codes");
const { createUser, findUserByEmail } = require("../repositories/user.repository");
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

module.exports = { addUser };