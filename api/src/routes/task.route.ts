import { Router } from "express";
import { Request, Response } from "express";
import {
  create,
  findAll,
  findById,
  update,
  deleteById,
} from "../controllers/task.controller";
import { validId, validTask } from "../middlewares/global.middlewarer";

const route = Router();

route.post("/", create);
route.get("/", findAll);
route.get("/:id", validId, validTask, findById);
route.patch("/:id", validId, validTask, update);
route.delete("/:id", validId, validTask, deleteById);

export default route;
