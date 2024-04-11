import { FilterParams, PagedApiResponse } from '@/@types'
import { Task } from '@/models/tasks'
import api from '@/services/api'
import { getErrorMessage } from '@/utils/apiUtils'
import { getPaginationHeader } from '@/utils/paginationUtils'


export type ApiResponse<T> = {
  data: T
  error: ''
}

export class BaseComponentService<T> {

  async list(): Promise<PagedApiResponse<T[]>> {
    try {

      const response = await api.get('/')

      if (response.data) {
        const result = getPaginationHeader<T[]>(response)
        return result
      }
    } catch (error) {
      throw getErrorMessage(error)
    }

    return { data: [] }
  }

  async create(data: Task): Promise<Task> {
    try {
      const response = await api.get('http://localhost:3000/task/')

      return response.data.data
    } catch (error) {
      throw getErrorMessage(error)
    }
  }

  async delete(id: string) {
    try {
      const response = await api.delete(`/:id=${id}`)

      return response.data.data
    } catch (error) {
      throw getErrorMessage(error)
    }
  }

  async update(id: string, data: Task) {
    try {
      const response = await api.patch(`/task/:id=${id}`, { ...data })

      return response.data.data
    } catch (error) {
      throw getErrorMessage(error)
    }
  }
}
