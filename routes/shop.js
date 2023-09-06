const express = require('express');
const path = require('path');

const rootDir = require(path.join(__dirname, '..', 'utils', 'path'));
const adminData = require(path.join(__dirname, '..', 'routes', 'admin'));

const router = express.Router();

router.get('/',(req, res, next) => {

    console.log(adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;