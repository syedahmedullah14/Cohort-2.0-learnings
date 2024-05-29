const express = require("express");
const app = express();
const zod = require("zod");
const port = 3001;

function validateInput(obj){
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8),
    })

    return schema.safeParse(obj)
}



app.post('/login', function(req,res){
    const response = validateInput(req.body)
    if(!response.success){
        res.json({
            msg: "your inputs are wrong"
        })
    }
    return;
})

// app.get('/health-checkup', function(req, res){
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys)
//     res.send({
//         response,
//         })
// })

app.listen(port);