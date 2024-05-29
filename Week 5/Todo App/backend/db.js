const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://syedahmedullahjaser2:rabwcL76kuwCoJeJ@cluster0.drrhuzd.mongodb.net/todo_app')

const todoSchema = mongoose.Schema({
        title: String,
        description: String, 
        completed: Boolean
}); 

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}