### Exercise: Building Controllers and Routes in Express

#### Objective
Create an Express application that includes a custom controller and associated routes, demonstrating the MVC architectural pattern. This exercise is designed to practice organizing application logic through controllers and managing client requests via routes.

#### Requirements

1. **Project Setup:**
   - Initialize a new Node.js project and install Express.
   - Create an `index.js` file to define your Express app logic.
   - Create a `server.js` file to import your Express app and start the server.

2. **Controller Implementation:**
   - Create a new directory named `controllers`.
   - Inside the `controllers` directory, create a file named `todoController.js`.
   - Implement a simple controller with functions: `listTodos` (to list all todo items) and `createTodo` (to add a new todo item).
   - Simulate data storage with an array of todos in memory.

3. **Setup Routes:**
   - Create a new directory named `routes`.
   - Inside the `routes` directory, create a file named `todoRoutes.js`.
   - Define routes for listing todos (`GET /todos`) and creating a new todo (`POST /todos`).

4. **Integrate Routes into Express App:**
   - In your `index.js`, import the routes and use them with your Express app instance.

5. **Server Configuration:**
   - In `server.js`, import your Express app from `index.js`, configure it to listen on port 3000.

#### Data Structure for Todo Item

- **id**: Unique identifier (integer or string).
- **title**: Title of the todo item (string).
- **completed**: Completion status (boolean).

#### Storing Todos In Memory

- Use a global array in `todoController.js` to hold todo items.
- Implement CRUD operations interacting with this array.

#### Testing Your Implementation

- Test the `GET /todos` and `POST /todos` routes with appropriate data.
- Ensure your tests verify the correct structure and behavior of the todo items.

### Running the Tests

1. **Install Requirements**
   - We have to start with installing our test packages as development dependencies
   - The packages we want to use are `jest` and `supertest`
   - We can install packages as dev dependencies by including a `--save-dev` flag when running the install command (like `npm i --save-dev <your packages>`)
   - With this information, what would the command to install `jest` and `supertest` as dev dependencies look like?
2. **Update the package.json scripts**
   - If you've done things right, you should have a package.json file in your project with `express` and `cors` as dependencies, and `jest` and `supertest` as dev dependencies.
   - In the scripts section of the package.json, we want to update our test script to run `jest` instead of the default `echo whatever and all that`
3. **Run the tests**
   - From here, if all has gone well, you can run the tests by running `npm test`
4. **Validate Correctness**
   - Make sure that the tests pass, examine each test case and ensure that everything is passing, and if not, that you understand the errors that are happening and have a sense of how to fix it

### Experiment

- Extend the controller with additional functionalities, such as updating and deleting todo items.
- Implement validation in your `createTodo` function.

### Submission Guidelines

- Push your completed project to a GitHub repository.
- Ensure your `package.json` includes Express as a dependency.
- Submit the URL to your GitHub repository.
