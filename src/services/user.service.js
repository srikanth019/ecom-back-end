const { httpsStatusCodes } = require("../constants/http-status-codes");
const { createUser, findUserByEmail, findUserById, fetchUsers, updateUser } = require("../repositories/user.repository");
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

const fetchAll = async (req) => {
    const { role } = req.query;
    let filter = { role: "user" }
    if (role === "admin") {
        filter = { role: "admin" }
    }
    const user = await fetchUsers(filter)
    if (!user) {
        throw errorResponse(httpsStatusCodes.NOT_FOUND, "USER_NOT_FOUND");
    }
    return user;
}

const update = async (req) => {
    const { id } = req.params;
    const userData = req.body
    const result = await updateUser(id, userData)
    if (!result) {
        throw errorResponse(httpsStatusCodes.INTERNAL_SERVER_ERROR, "Couldn't update product");
    }
    return result;
}

module.exports = { addUser, fetchUser, fetchAll, update }; 