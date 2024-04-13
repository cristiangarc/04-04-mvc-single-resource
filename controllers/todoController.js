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

// console.log('listTodos being checked...')

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

const updateTodo = (req, res) => {
    const { id } = req.params;
    const numId = Number(id);

    const index = todos.findIndex(todo => todo.id === numId);
    if (index !== -1) {
        todos[index] = { ...todos[index], ...req.body }
        res.status(200).send(todos[index]);
    } else {
        console.log('Todo not found');
        res.status(400).send('Todo not found');
    }
}

const deleteTodo = (req, res) => {
    const { id } = req.params;
    const numId = Number(id);

    const index = todos.findIndex(todo => todo.id === numId);
    if (index !== -1) {
        todos.splice(index, 1);
        res.status(200).send('Todo successfully deleted');
    } else {
        res.status(400).send('Todo not found');
    }
}

module.exports = {
    listTodos: listTodos,
    createTodo: createTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo
}