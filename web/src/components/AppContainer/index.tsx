import { ComponentProps } from '@/@types'

import { Container, Body, Content, Header } from './styles'
import TopHeader from './TopHeader'

export { AppTitle, AppSubTitle, AppContent } from './styles'

export default function AppContainer({ children }: ComponentProps) {

  return (
    <Container>
      <Header>
        <TopHeader />
      </Header>

      <Body>
        <Content>
          {children}
        </Content>
      </Body>
    </Container>
  )
}
