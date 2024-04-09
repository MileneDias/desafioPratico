const Task = require("../moddels/Task");

const createService = (body) => Task.create(body);
const findAllService = () => Task.find();
const findByIdService = (id) => Task.findById(id);
const updateService = (
    id, title, description, date, owner, status
) => Task.findOneAndUpdate(
    { _id: id },
    {
        title,
        description,
        date,
        owner,
        status
    });

module.exports = {
  createService,
  findAllService,
  findByIdService,
  updateService,
};
