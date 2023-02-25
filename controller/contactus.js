const path = require('path');
const express = require('express');
const rootDir = require('../helper/path');

exports.contactpage = (req, res, next) => {   
    res.sendFile(path.join(rootDir,'views','contact.html'));
}

exports.successpage = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','success.html'));
}