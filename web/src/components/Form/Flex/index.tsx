import { ComponentProps } from '@/@types'

import { Container } from './styles'

type FlexProps = ComponentProps & {
  isTabletOrMobile?: boolean
}

export default function Flex({
  isTabletOrMobile = false,
  children
}: FlexProps) {
  return <Container isTabletOrMobile={isTabletOrMobile}>{children}</Container>
}
