import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: { type: Number , default: Math.floor(Math.random() * 1000) },
  task: { type: String, required: true },
  date: { type: Date, default: Date.now()},
  checked: { type: Boolean },
})

const Task = mongoose.model('Task', taskSchema)
export default Task


