const Todo = require('../models/Todo');


class TodoRepository {
    constructor(model) {
            this.model = model;
        }
        // get all todos
    getAllTodos() {
        return this.model.find();
    }

    // get todo by Id
    getTodoById(id) {
        return this.model.findById(id);
    }

    // create new todo
    createTodo(task) {
            const newTodo = { task, isDone: false };
            const todo = new this.model(newTodo);
            return todo.save();
        }
        // update created todo
    updateTodo(id, object) {
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $set: { task: object.task, isDone: object.isDone } });

    }

    deleteTodo(id) {
        return this.model.findOneAndDelete(id);
    }
}




module.exports = new TodoRepository(Todo);