const i18n = require('i18n');

const successResponse = (res, statusCode, message, data) => {
    // const localizedMessage = i18n.__(message || 'SUCCESS');
    res.status(statusCode).json({
        message,
        data,
        success: true
    });
};

const errorResponse = (status, message) => {
    const error = new Error(message || 'Something went wrong');
    error.status = status || 500;
    return error;
};

module.exports = {
    successResponse,
    errorResponse
};




