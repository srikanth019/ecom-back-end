const express = require('express');
require("dotenv").config()
const cors = require('cors');
const { config } = require('./src/config');
const rootRouter = require('./src/routes');
const { connectDb } = require('./src/db');
const errorMiddleware = require('./src/middlewares/errorHandling.middleware');

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json())

app.use("/api/v1", rootRouter)

app.use(errorMiddleware);

app.listen(config.port, () => {
    connectDb()
    console.log(`App listening at http://localhost:${config.port}`);
});