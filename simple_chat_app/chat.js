const express = require('express');

const fs = require('fs');
const route = express.Router();

route.get('/',(req, res, next)=>{

    fs.readFile("messages.txt",(err,data) =>{
        if(err){
            console.log(err);
            data = 'No chat exit';
        }

        res.send(`
            ${data}<form action="/addtoFile" onsubmit="document.getElementById('username').value = localStorage.getItem('username')" method="POST">
                <input type="text" id="message" name="message" placeholder="message">
                <input type="hidden" name="username" id="username"></input>
                <button type="submit"> send </button>
            </form>`);
    })

});


route.post('/addtoFile',(req,res,next) => {
    fs.writeFile("messages.txt",`${req.body.username}: ${req.body.message} `,{flag:'a'},(err) => err?console.log(err):res.redirect("/")
    );
})

module.exports = route;