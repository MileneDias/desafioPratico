import { ReactNode } from 'react'

import { Container } from './styles'

type TableProps = {
  head?: ReactNode
  body: ReactNode
}

export default function Table({ head, body }: TableProps) {
  return (
    <Container>
      {head && <thead>{head}</thead>}

      {body}
    </Container>
  )
}
