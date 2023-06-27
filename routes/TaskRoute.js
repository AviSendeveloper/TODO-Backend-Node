const Router = require("express").Router();
const TaskController = require("../controllers/TaskController");
const TaskCreateValidation = require("../validations/TaskCreateValidation");

Router.get("/list", TaskController.list);
Router.get("/find", TaskController.find);
Router.post("/create", TaskCreateValidation, TaskController.create);
Router.post("/update", TaskController.update);
Router.post("/delete", TaskController.deleteList);

module.exports = Router;
