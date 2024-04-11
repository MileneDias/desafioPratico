import { ObjectId } from "mongoose";
import Task from "../moddels/Task";

const createService = (body: any) => Task.create(body);
const findAllService = () => Task.find();
const findByIdService = (id: string) => Task.findById(id);
const updateService = (
  id: ObjectId,
  title: string,
  description: string,
  date: Date,
  owner: string,
  status: string
) =>
  Task.findOneAndUpdate(
    { _id: id },
    {
      title,
      description,
      date,
      owner,
      status,
    }
  );

const deleteByIdService = (id: string) => Task.findOneAndDelete({ _id: id });

export {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteByIdService,
};

