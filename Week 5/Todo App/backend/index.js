const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express()
const { todo } = require('./db')

app.use(express.json());

app.post('/todo', async function(req,res){
    const createPayLoad = req.body;
    const parsedPayload = createTodo.safeParse(createPayLoad);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: 'wrong inputs'
        })
    }

    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false,
    })

    res.json({
        msg: "Todo Created"
    })

})

app.get('/todos',async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos,
    })

})

app.put('/completed',async function(req,res){
    const updatePayLoad = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: 'wrong inputs'
        })
    }

    await todo.update({
        _id: req.body.id   
        },
        {
            completed: true,
        }
    )

    res.json({
        msg: "Todo marked as completed"
    })
})


app.listen(3000, function(){
    console.log("server running at 3000")
});