
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req, res, next) => {
    console.log("The always runs");
    next();
});

app.use('/add-product',(req, res, next) => {
    console.log("The first middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size" placeholder="enter size"><button type="submit">Add Product</button></form>')
});

app.use('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
    
    res.send('<h1> Hello form Express</h1>');
});

app.listen(3000);