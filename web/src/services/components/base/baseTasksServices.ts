import { FilterParams, PagedApiResponse } from '@/@types'
import { Task } from '@/models/tasks'
import api from '@/services/api'
import { getErrorMessage } from '@/utils/apiUtils'
import { addFilterParams, getPaginationHeader } from '@/utils/paginationUtils'

export class BaseComponentService<T> {
  async list(
    filter: FilterParams = { page: 1, pageSize: 999999 },
  ): Promise<PagedApiResponse<T[]>> {
    try {
      let url = addFilterParams(filter, 'component')

      const response = await api.get(url)

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
      const response = await api.post('component', { ...data })

      return response.data.data
    } catch (error) {
      throw getErrorMessage(error)
    }
  }

  async delete(id: string) {
    try {
      const response = await api.delete(`/task/:id=${id}`)

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
