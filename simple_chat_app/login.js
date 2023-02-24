const express = require('express');
const route = express.Router();

route.get('/login',(req,res,next)=>{

    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/send" method="POST"><input id="username" type="text" name="username" placeholder=" username"><button type="submit"> Login </button></form>')

});

route.post('/send',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = route;