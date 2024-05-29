const secret = require("../index")
const jwt = require("jsonwebtoken")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
        try{
            const token = req.headers.authorization;
            const words = token.split(" ");
            const jwtToken = words[1];
            const decodedValue = jwt.verify(jwtToken, secret)
            if(decodedValue.username){
                req.username = decodedValue.username
                next();
        }
        else{
            res.json({
                msg: "You are not authenticated"
            })
        }
        }
        catch(e){
            res.json({
                msg: "Wrong inputs"
            })
        }
        
    }
module.exports = userMiddleware;