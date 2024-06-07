const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const todoRoutes = require('./routes/todoRoutes');

app.use(todoRoutes.router);

module.exports = {
    app: app
};