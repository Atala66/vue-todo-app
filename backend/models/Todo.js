const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const todoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Todo = mongoose.model('todo', todoSchema);