const express = require('express');
const app = express();
const employeeRoute = express.Router();

employeeRoute.get('/', (req, res) => {
    res.send("Api work");
});

module.exports = employeeRoute;