import { createContext } from 'react'

export type TasksContextData = {
  data: string
  updateData: (information: string) => void
}

export const TasksContext = createContext<TasksContextData>(
  {} as TasksContextData
)