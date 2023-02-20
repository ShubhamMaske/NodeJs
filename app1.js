
const express = require('express');

const app = express();
app.use((req, res, next) => {
    console.log("The first middleware");
    console.log("Hello");
    next();
});

app.use((req, res, next) => {
    console.log("The another middleware");
    res.send('<h1> Hello form Express</h1>');
});

app.listen(3000);