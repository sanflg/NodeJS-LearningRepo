const express = require('express');
const path = require('path');

const rootDir = require(path.join(__dirname, '..', 'utils', 'path'))

const router = express.Router();

const products = [];

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-products.html'));
});

router.post('/add-product',(req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/shop');
});

exports.router = router;
exports.products = products;