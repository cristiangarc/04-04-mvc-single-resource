const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/todos', todoController.listTodos);
router.post('/todos', todoController.createTodo);

module.exports = {
    router: router
};