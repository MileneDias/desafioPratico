import { createContext, useContext, useCallback, useState } from 'react'

import { ComponentProps } from '@/@types'
import Alert, { AlertProps } from '@/components/Alert'
import styles from '@/styles/themes/default'

type AlertContextData = {
  showAlertBase(data: AlertProps): void
  showError(title: string, text: string): void
  showSuccess(title: string, text: string): void
  showWarning(title: string, text: string): void
}

const AlertContext = createContext<AlertContextData>({} as AlertContextData)

export function AlertProvider({ children }: ComponentProps) {
  const [content, setContent] = useState<AlertProps | null>(null)

  const showError = useCallback((title: string, text: string) => {
    setContent({
      title,
      text,
      icon: 'error',
      buttons: ['Ok'],
      buttonsColors: [styles.colors.green, styles.colors.red]
    })
  }, [])

  const showSuccess = useCallback((title: string, text: string) => {
    setContent({
      title,
      text,
      icon: 'success',
      buttons: ['Ok'],
      buttonsColors: [styles.colors.green, styles.colors.red]
    })
  }, [])

  const showWarning = useCallback((title: string, text: string) => {
    setContent({
      title,
      text,
      icon: 'warning',
      buttons: ['Ok'],
      buttonsColors: [styles.colors.green, styles.colors.red]
    })
  }, [])

  const showAlertBase = useCallback((data: AlertProps) => {
    setContent({
      buttonsColors: [styles.colors.green, styles.colors.red],
      ...data
    })
  }, [])

  return (
    <AlertContext.Provider
      value={{ showAlertBase, showError, showSuccess, showWarning }}
    >
      {children}

      {content && <Alert {...content} onClose={() => setContent(null)} />}
    </AlertContext.Provider>
  )
}

export function useAlert(): AlertContextData {
  const context = useContext(AlertContext)

  return context
}
