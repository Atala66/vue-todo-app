const express = require("express");
const router = express.Router();
const config = require("config");
const Todo = require("../models/Todo");
const repository = require("../repositories/TodoRepository");
const { check, validationResult } = require("express-validator/check");

// @route       GET api/todos
// @descrition  Get all todos
// @access      Public
router.get("/", (req, res) => {
    repository
        .getAllTodos()
        .then(todos => {
            // res.status(200).json({ msg: 'All todo tasks' });
            res.json(todos);
        })
        .catch(error => {
            console.log(error.message);
            res.status(500).send('Get all todo tasks failed');
        });
});

// @route       GET api/todos/:id
// @descrition  Get especific todo by id
// @access      Public
router.get("/:id", (req, res) => {});

// @route       POST api/todos
// @descrition  Add a new todo task
// @access      Public
router.post("/", async(req, res) => {
    const { task } = req.body;
    repository
        .createTodo(task)
        .then(todo => {
            res.status(200).json({ msg: 'New todo task created' });
            res.json(todo);
        })
        .catch(error => {
            console.log(error.message);
            res.status(500).send('Create new task failed');
        });
});

// @route       PUT api/todos/:id
// @descrition  Update a created task
// @access      Public
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const todo = { task: req.body.task, done: req.body.isDone };
    repository.updateTodo(id, todo).then((todo => {
            res.status(200).json({ msg: `Succesful updated task with id ${id}` });
            res.json(todo);
        }))
        .catch(error => {
            console.log(error.message);
            res.status(500).send('Update task failed');
        });
});

// @route       DELETE api/todos/:id
// @descrition  Delete especific todo by id
// @access      Public
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    repository.deleteTodo(id).then((todo => {
            res.status(200).json({ msg: `Succesful deleted task with id ${id}` });

        }))
        .catch(error => {
            console.log(error.message);
            res.status(500).send('Delete task failed');
        });
});

module.exports = router;