const Router = require("express").Router();
const TaskController = require('../controllers/TaskController');

// Router.get('/fetch-all', TaskController.fetchAll);

Router.post('/create', TaskController.create);

module.exports = Router;