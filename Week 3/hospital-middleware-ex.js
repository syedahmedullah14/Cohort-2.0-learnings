const express = require("express");
const app = express();

const port = 3001;

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const pass = req.headers.pass;

    if(username != "jaser" || pass != "pass"){
        res.status(400).json({
            msg: "user does not exist",
        });
    }
        
    else{
        next();
    }
};

function kidneyMiddleware(req,res,next){

    const kidneyId = req.query.kidneyId;
    if(kidneyId !=1 && kidneyId != 2){
        res.status(400).json({
            msg: "wrong inputs",
        })
    }
    else{
        next();
    }

}
app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req,res){

    res.send("Your heart is healthy")
});


app.listen(port);