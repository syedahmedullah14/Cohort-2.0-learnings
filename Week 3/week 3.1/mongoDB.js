const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://syedahmedullahjaser2:rabwcL76kuwCoJeJ@cluster0.drrhuzd.mongodb.net/")
// mongoose.connect("mongodb+srv://syedahmedullahjaser2:rabwcL76kuwCoJeJ@cluster0.drrhuzd.mongodb.net/?retryWrites=true&w=majority&userApp=Cluster0")

const User = mongoose.model('Users', {name: String, email: String, password: String});

app.post("/signUp", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    
    const existingUser = await User.findOne({email: username});
    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    });

    user.save();
    res.json({
        "msg": "user created successfully"
    })

})

app.listen(5500);