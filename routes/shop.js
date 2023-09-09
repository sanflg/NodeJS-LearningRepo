const express = require('express');
const path = require('path');

const products = require(path.join(__dirname, '..', 'routes', 'admin')).products;

const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('shop', {docTitle: 'Shop', path: '/shop',prods: products});
});

module.exports = router;