const mongoose = require("mongoose");
const { dbConfig } = require("../config");
exports.connectDb = () => {
    try {
        mongoose
            .connect(dbConfig.mongo_url)
            .then(() => console.log("DB connected!"));
    } catch (error) {
        console.log(error);

    }
}
