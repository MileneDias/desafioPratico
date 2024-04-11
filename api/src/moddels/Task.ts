import mongoose, { Schema, Model } from "mongoose";

interface TaskDocument extends mongoose.Document {
  title: string;
  description: string;
  date: string;
  owner: string;
  status: string;
}

const TaskSchema: Schema<TaskDocument> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Tasks: Model<TaskDocument> =
  mongoose.model < TaskDocument > ("Task", TaskSchema);

export default Tasks;
