import { Task } from "@/models/tasks"

export type TasksDb = Task

import { BaseComponentService } from './base/baseTasksServices'

class TasksService extends BaseComponentService<TasksDb> {}

export default new TasksService()
