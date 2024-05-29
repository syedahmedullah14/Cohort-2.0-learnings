const {JWT_SECRET} = require("../config")
const jwt = require("jsonwebtoken")

// Middleware for handling auth

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const token = req.headers.authorization;
        const words = token.split(" ");
        const jwtToken = words[1];
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET)
        // console.log(decodedValue)
        if(decodedValue.username){
    
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

module.exports = adminMiddleware;