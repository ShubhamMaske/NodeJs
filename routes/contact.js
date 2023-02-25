const path = require('path');
const express = require('express');
const rootDir = require('../helper/path');

const contactController = require('../controller/contactus');


const router = express.Router();

router.get('/form',contactController.contactpage);


router.post('/success',contactController.successpage);
module.exports = router;