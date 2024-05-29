const express = require("express");
const app = express();

const port = 3000;



//ugly version of authorisation
app.get("/health-checkup", function(req,res){

    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const pass = req.headers.pass;

    if(username != "jaser" || pass != "pass"){
        res.status(400).json({
            msg: "user does not exist",
        });
        return;
    }

    if(kidneyId !=1 && kidneyId != 2){
        res.status(400).json({
            msg: "wrong inputs",
        })
        return;
    }

    res.json({
        msg: "Your kidney is fine!"
    })

});


app.listen(port);