const path = require('path');
const express = require('express');

const rootDir = require('../helper/path');

exports.errorPage = (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
}