const errorMiddleware = (err, req, res, next) => {
    try {
        const status = err.status || 500;
        const message = err.message || 'Something went wrong';
        const success = false;

        res.status(status).json({ message, success });
    } catch (error) {
        next(error);
    }
};

module.exports = errorMiddleware;
