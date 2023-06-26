const Router = require("express").Router();
const TaskController = require("../controllers/TaskController");
const TaskCreateValidation = require("../validations/TaskCreateValidation");

Router.get("/list", TaskController.list);
Router.post("/create", TaskCreateValidation, TaskController.create);

module.exports = Router;
