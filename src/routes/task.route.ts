import { Router } from "express";
import { create, findAll, findById, update, deleteById } from "../controllers/task.controller";
import { validId, validTask } from "../middlewares/global.middlewarer";

const route = Router();

route.post("/", create);
route.get("/", findAll);
route.get("/:id", validId, validTask, findById);
route.patch("/:id", validId, validTask, update);
route.delete("/:id", validId, validTask, deleteById);

export = route;

/* const route = require("express").Router();
const taskController = require("../controllers/task.controller");

const { validId, validTask } = require("../middlewares/global.middlewarer");

route.post("/", taskController.create);
route.get("/", taskController.findAll);
route.get("/:id", validId, validTask, taskController.findById);
route.patch("/:id", validId, validTask, taskController.update);
route.delete("/:id", validId, validTask, taskController.deleteById);

module.exports = route;
 */