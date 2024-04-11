import { ReactNode, createContext, useContext } from 'react'
import { useMediaQuery } from 'react-responsive'

type ResponsiveContextData = {
  isTabletOrMobile: boolean
  isBigScreen: boolean
}

const ResponsiveContext = createContext<ResponsiveContextData>(
  {} as ResponsiveContextData
)

export type ComponentProps = {
  children: ReactNode
}

export function ResponsiveProvider({ children }: ComponentProps) {
  const isBigScreen = useMediaQuery({ query: '(min-width: 425px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 426px)' })

  return (
    <ResponsiveContext.Provider value={{ isTabletOrMobile, isBigScreen }}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export function useResponsive(): ResponsiveContextData {
  const context = useContext(ResponsiveContext)

  return context
}
