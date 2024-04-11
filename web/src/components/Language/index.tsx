import { CSSProperties } from 'react'

import {
  Languages,
  useInternationalization
} from '@/hooks/internationalization'

import { LanguageContainer } from './styles'

type LanguageProps = {
  style?: CSSProperties
}

export default function Language({ style }: LanguageProps) {
  const { changeLanguage } = useInternationalization()

  return (
    <LanguageContainer style={style}>
      <button type="button" onClick={() => changeLanguage(Languages.PTBR)}>
        <img src="/translate/brazil.svg" />
      </button>
      <button type="button" onClick={() => changeLanguage(Languages.EN)}>
        <img src="/translate/unitedStates.svg" />
      </button>
    </LanguageContainer>
  )
}
