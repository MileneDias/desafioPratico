const taskService = require("../services/task.service");
const mongoose = require("mongoose");

const validId = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "ID inválido :(" });
    }

    next();
};

const validTask = async (req, res, next) => {
    const id = req.params.id;

    const task = await taskService.findByIdService(id);

    if (!task) {
      return res.status(400).send({ message: "Tarefa não encontrada :(" });
    }

    next();
};

module.exports(
    validId,
    validTask,
)