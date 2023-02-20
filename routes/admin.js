const express = require('express');

const router = express.Router();


router.get('/add-product',(req, res, next) => {
    
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="text" name="size" placeholder="enter size"><button type="submit">Add Product</button></form>')
});

router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
});

module.exports = router;