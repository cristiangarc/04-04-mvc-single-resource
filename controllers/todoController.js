const todos = [
    {
        id: 1,
        title: 'Laundry',
        completed: false
    },
    {
        id: 2,
        title: 'Homework',
        completed: true
    }
];

const listTodos = (req, res) => {
    res.status(200).json(todos)
}

const createTodo = (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: req.body.completed
    }
    todos.push(newTodo);
    res.status(201).json(newTodo);
}

module.exports = {
    listTodos: listTodos,
    createTodo: createTodo
}