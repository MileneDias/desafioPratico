import { createContext, useContext, useCallback, useState } from 'react'

import { ComponentProps } from '@/@types'
import Loading from '@/components/Loading'

type LoadingContextData = {
  showLoading(): void
  showLoadingWithProcess(): void
  hideLoading(): void
  updateProgress(value: number): void
  isLoading: boolean
}

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData
)

export function LoadingProvider({ children }: ComponentProps) {
  const [open, setOpen] = useState(false)
  const [process, setProcess] = useState<number | null>(null)

  const showLoading = useCallback(() => {
    setOpen(true)
  }, [])

  const showLoadingWithProcess = useCallback(() => {
    setOpen(true)
    setProcess(1)
  }, [])

  const hideLoading = useCallback(() => {
    setOpen(false)
    setProcess(null)
  }, [])

  const updateProgress = useCallback((value: number) => {
    setProcess(Number(value.toFixed(0)))
  }, [])

  return (
    <LoadingContext.Provider
      value={{
        showLoading,
        showLoadingWithProcess,
        hideLoading,
        updateProgress,
        isLoading: open
      }}
    >
      {children}

      {open && <Loading value={process} />}
    </LoadingContext.Provider>
  )
}

export function useLoading(): LoadingContextData {
  const context = useContext(LoadingContext)

  return context
}
