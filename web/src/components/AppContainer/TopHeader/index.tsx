import Language from '@/components/Language'
import { useInternationalization } from '@/hooks/internationalization'

import { Container } from './styles'

export default function TopHeader() {
  const { t } = useInternationalization()
  return (
    <Container>
      <article />

      <article>
        {t('header.title')}
      </article>

      <article>
         <Language />
      </article>
    </Container>
  )
}
