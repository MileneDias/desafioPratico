import { Request, Response } from "express";
import {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteByIdService,
} from "../services/task.service";
import { ObjectId } from "mongoose";

// Definindo uma nova interface para a Request que inclui a propriedade 'task'
interface CustomRequest extends Request {
  task?: any;
  id?: ObjectId;
}

const create = async (req: any, res: Response) => {
  try {
    const { title, description, date, owner, status } = req.body;

    const task = await createService({
      title,
      description,
      date,
      owner,
      status,
    });

    if (!task) {
      return res.status(400).send({ message: "Erro na criação da tarefa..." });
    }

    res.status(201).send({
      task: {
        id: task._id,
        title,
        description,
        date,
        owner,
        status,
      },
      message: "Tarefa criada com sucesso!",
    });
  } catch (err: any) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req: any, res: Response) => {
  try {
    const tasks = await findAllService();

    if (tasks.length === 0) {
      return res
        .status(400)
        .send({ message: "Não há usuários cadastrados :(" });
    }

    res.send(tasks);
  } catch (err:any) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req: any, res: Response) => {
  try {
    const task = req.task;
    res.send(task);
  } catch (err: any) {
    res.status(500).send({ message: err.message });
  }
};

const update = async (req: any, res: Response) => {
  try {
    const { title, description, date, owner, status } = req.body;

    const id = req.id;

    await updateService(id, title, description, date, owner, status);

    res.send({ message: "Tarefa alterada com sucesso ;)" });
  } catch (err: any) {
    res.status(500).send({ message: err.message });
  }
};

const deleteById = async (req: any, res: Response) => {
  try {
    const id = req.id;

    await deleteByIdService(id);

    res.send({ message: "Tarefa excluída com sucesso ;)" });
  } catch (err: any) {
    res.status(500).send({ message: err.message });
  }
};

export { create, findAll, findById, update, deleteById };
