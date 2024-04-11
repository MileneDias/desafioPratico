import { Request, Response, NextFunction } from "express";
import {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteByIdService,
} from "../services/task.service";
import mongoose, { ObjectId } from "mongoose";

// Definindo uma nova interface para a Request que inclui a propriedade 'task'
interface CustomRequest extends Request {
  task?: any;
  id?: ObjectId;
}

const validId = (req: any, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "ID inválido :(" });
    }

    next();
  } catch (err: any) {
    res.status(500).send({ message: err.message });
  }
};

const validTask = async (req: any, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;

    const task = await findByIdService(id);

    if (!task) {
      return res.status(400).send({ message: "Tarefa não encontrada :(" });
    }

    req.id = id;
    req.task = task;

    next();
  } catch (err: any) {
    res.status(500).send({ message: err.message });
  }
};

export { validId, validTask };


/* const taskService = require("../services/task.service");
const mongoose = require("mongoose");

const validId = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "ID inválido :(" });
    }

    next();
  } catch (err: any) {
    res.status(500).send({ message: err.message });
  }
};

const validTask = async (req, res, next) => {
  try {
    const id = req.params.id;

    const task = await taskService.findByIdService(id);

    if (!task) {
      return res.status(400).send({ message: "Tarefa não encontrada :(" });
    }

    req.id = id;
    req.task = task;

    next();
  } catch (err: any) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  validId,
  validTask,
};
 */
