const path = require('path');
const express = require('express');
const rootDir = require('../helper/path');
const bodyParser = require('body-parser');

const router = express.Router();

const detailController = require('../controller/details');
router.get('/add-product',(req, res, next) => {
    
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/add-products',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

router.get('/get-product/:productId',detailController.detailpage);

module.exports = router;