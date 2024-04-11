import { FilterParams, PageParams, PagedApiResponse } from '@/@types'
import { AxiosResponse } from 'axios'

import { ApiResponse } from './apiUtils'

export function addFilterParams(filter: FilterParams, url: string) {
  const hasMark = url.includes('?')

  if (filter) {
    url += `${hasMark ? '&' : '?'}PageSize=${filter.pageSize}&Page=${
      filter.page
    }`

    if (filter.orderBy) {
      url += `&OrderBy=${filter.orderBy}`
    }

    if (filter.search) {
      url += `&Search=${filter.search}`
    }
  }

  return url
}

export function getPaginationHeader<T>(
  response: AxiosResponse<ApiResponse<T>>
): PagedApiResponse<T> {
  const xPaginationString = response.headers['x-pagination']

  const pageParams: PageParams = xPaginationString
    ? JSON.parse(xPaginationString)
    : null

  return { data: response.data.data, pageParams }
}
