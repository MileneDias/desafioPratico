import { i18n } from '@/hooks/internationalization'
import { InternalAxiosRequestConfig } from 'axios'

export type ApiResponse<T> = {
  data: T
  error: ''
}

export function setApiHeaders(config: InternalAxiosRequestConfig) {
 
  config.headers.language = i18n.locale
  
  return config
}

export function getErrorMessage(error: any) {
  return error.response
    ? error.response.data
      ? error.response.data.error
      : error.response
    : error.message
}
