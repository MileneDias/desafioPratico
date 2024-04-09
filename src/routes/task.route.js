const route = require("express").Router();
const taskController = require("../controllers/task.controller");

const { validId, validTask } = require("../middlewares/global.middlewarer");

route.post("/", taskController.create);
route.get("/", taskController.findAll);
route.get("/:id", validId, validTask, taskController.findById);
route.patch("/:id", validId, validTask, taskController.update);

module.exports = route;
