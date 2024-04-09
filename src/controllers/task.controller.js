const taskService = require("../services/task.service");
;//const mongoose = require("mongoose");

const create = async (req, res) => {
  const { title, description, date, owner, status } = req.body;

  /* * 
  * 
  if (!title || !description || !date || !owner || !status);
  {
    res
      .status(400)
      .send({ message: "Preencha todos os campos para registro." });
  }
  */

  const task = await taskService.createService(req.body);

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
};

const findAll = async (req, res) => {
  const tasks = await taskService.findAllService();

  if (tasks.length === 0) {
    return res.status(400).send({ message: "Não há usuários cadastrados :(" });
  }

  res.send(tasks);
};

const findById = async (req, res) => {
  const id = req.params.id;

  /* if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "ID inválido :(" });
  } */

  const task = await taskService.findByIdService(id);

 /*  if (!task) {
    return res.status(400).send({ message: "Tarefa não encontrada." });
  } */

  res.send(task);
};

const update = async (req, res) => {
  const { title, description, date, owner, status } = req.body;

  /**
  if (!title && !description && !date && !owner && !status);
  {
    res
      .status(400)
      .send({ message: "Preencha ao menos um campo para registro." });
  }
  */

  const id = req.params.id;

  /* if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "ID inválido :(" });
  } */

 // const task = await taskService.findByIdService(id);

  /* if (!task) {
    return res.status(400).send({ message: "Tarefa não encontrada." });
  } */

  await taskService.updateService(id, title, description, date, owner, status);

  res.send({ message: "Tarefa alterada com sucesso ;)" });
};

module.exports = { create, findAll, findById, update };
