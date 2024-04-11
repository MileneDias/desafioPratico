import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
  useMemo
} from 'react'

import { ComponentProps } from '@/@types'
import { getLocale } from '@/utils/dateUtils'
import { LANGUAGE_KEY } from '@/utils/storageUtils'
import { Locale } from 'date-fns'
import { I18n, TranslateOptions } from 'i18n-js'

import ptBR from '../internationalization/ptbr.json'
import en from '../internationalization/ingles.json'

// eslint-disable-next-line react-refresh/only-export-components
export enum Languages {
  // eslint-disable-next-line no-unused-vars
  PTBR = 'ptBR',
  // eslint-disable-next-line no-unused-vars
  EN = 'en'
}

type InternationalizationContextData = {
  language: Languages
  locale: Locale
  changeLanguage(data: Languages): void
  t(tag: string, options?: TranslateOptions): string
}

const InternationalizationContext =
  createContext<InternationalizationContextData>(
    {} as InternationalizationContextData
  )

const i18n = new I18n({ en, ptBR })

i18n.enableFallback = true
i18n.locale = Languages.PTBR

export function InternationalizationProvider({ children }: ComponentProps) {
  const [language, setLanguage] = useState<Languages>(Languages.PTBR)

  useEffect(() => {
    const data = localStorage.getItem(LANGUAGE_KEY)
    if (data) {
      i18n.locale = data
      setLanguage(data as Languages)
    }
  }, [])

  const changeLanguage = useCallback((data: Languages) => {
    i18n.locale = data
    setLanguage(data)
    localStorage.setItem(LANGUAGE_KEY, data)
  }, [])

  const t = useCallback(
    (tag: string, options?: TranslateOptions) => i18n.t(tag, options),
    []
  )

  const locale = useMemo(() => getLocale(language), [language])

  return (
    <InternationalizationContext.Provider
      value={{ language, changeLanguage, t, locale }}
    >
      {children}
    </InternationalizationContext.Provider>
  )
}

export function useInternationalization(): InternationalizationContextData {
  const context = useContext(InternationalizationContext)

  return context
}

export { i18n }
