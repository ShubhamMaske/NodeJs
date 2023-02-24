const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const loginPage = require('./simple_chat_app/login');
const chatPage = require('./simple_chat_app/chat');

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginPage);
app.use(chatPage);

app.use((req, res, next) => {
    res.status(404).send('<h1> Please correct the url </h1>');
})

app.listen(3000);
