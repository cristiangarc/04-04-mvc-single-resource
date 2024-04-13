const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// console.log(typeof todoController.listTodos);

router.get('/todos', todoController.listTodos);
router.post('/todos', todoController.createTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = {
    router: router
};