// todo.test.js
const request = require('supertest');
const app = require('../index'); // Adjust this path to correctly import your Express app

describe('Todo Controller and Routes', () => {
  // Test the GET /todos route
  it('should list all todos', async () => {
    const response = await request(app).get('/todos');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    // Additional check for the structure of a todo item, if the array is not empty
    if (response.body.length) {
      expect(response.body[0]).toHaveProperty('id');
      expect(response.body[0]).toHaveProperty('title');
      expect(response.body[0]).toHaveProperty('completed');
    }
  });

  // Test the POST /todos route for creating a new todo
  it('should create a new todo and return it', async () => {
    const newTodo = {
      title: 'Test Todo',
      completed: false
    };

    const response = await request(app)
      .post('/todos')
      .send(newTodo);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(newTodo.title);
    expect(response.body.completed).toBe(newTodo.completed);
  });

  // Additional tests can be added to validate update and delete functionalities
});

