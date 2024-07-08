const express = require('express');
const userController = require('../controllers/users.controller');
const usersRoutes = express.Router();

usersRoutes.get('/users', userController.getUsers);

module.exports = usersRoutes;
