import { ReactNode } from 'react'

export type ComponentProps = {
  children: ReactNode
}

export type Caractere = RegExp | string

export type Options = {
  value: unknown
  label: string
}

export type FilterParams = {
  page?: number
  pageSize?: number
  orderBy?: string
  search?: string
}

export type PageParams = {
  total: number
  totalPages: number
  page: number
  hasPrevious: boolean
  hasNext: boolean
}

export type PagedApiResponse<T> = {
  data: T
  pageParams?: PageParams
}
