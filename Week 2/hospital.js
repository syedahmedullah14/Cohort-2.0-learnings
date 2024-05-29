const express = require('express');

const app = express();

const users = [{
    name: "Jaser",
    kidneys: [{
        healthy : false,
    },
    // {
    //      healthy: true}
    ]
}]

app.get('/', function(req, res){
    const jaserskidney = users[0].kidneys;
    console.log(jaserskidney);

    const numberOfKidneys = jaserskidney.length;

    let numberOfHealthyKidneys = 0;

    for(let i=0; i<jaserskidney.length; i++){
        if(jaserskidney.healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys,
    })

})

app.use(express.json());

app.post('/', function(req, res){
   
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done"
    })


})
app.put('/', function(req, res){
    for(let i=0; i<users[0].kidneys.length; i++){ 
        users[0].kidneys[i].healthy = true;
    }
    res.json({msg: "updated"});
})
app.delete('/', function(req, res){

    if(atleastOneBadKidney()){
        const newKidney=[];

    for(let i=0; i<users[0].kidneys.length; i++){ 
        if(users[0].kidneys[i].healthy){
            newKidney.push({
                healthy: true,
            })
        }
    }
    users[0].kidneys = newKidney;
    res.json({
        msg: "done"
    })
    }
    else{
        res.status(411).json({
            msg: "You have no bad kidneys"
        })
    }
})


//edge cases
function atleastOneBadKidney(){
    let atleastOneBadKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneBadKidney = true;
        }
    }
    return atleastOneBadKidney;
}

app.listen(3000);