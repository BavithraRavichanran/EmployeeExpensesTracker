const express = require('express');
const app = express();
const userRoute = express.Router();

userRoute.get('/', (req, res) => {
    res.send("user work");
});

module.exports = userRoute;