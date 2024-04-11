import { TasksDb } from '@/services/components/taskService'
import { createContext } from 'react'

export type TasksContextData = {
  data: any
  updateData: (information: any) => void
}

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData
)