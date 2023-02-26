const path = require('path');
const express = require('express');
const rootDir = require('../helper/path');

exports.detailpage = (req, res, next) => {   
    res.send('Product with product Id:'+req.params.productId);
}