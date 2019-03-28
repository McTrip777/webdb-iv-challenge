const express = require('express');
const helmet = require('helmet');

const dishRouter = require('./helpers/dish-router.js');
const recipeRouter = require('./helpers/recipe-router.js');

const server = express();
server.use(helmet());
server.use(express.json());

server.use('/api/dish', dishRouter);
server.use('/api/recipe', recipeRouter);

server.get('/', (req,res) => {
    res.send('Hello World');
});

module.exports = server;