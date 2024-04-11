import { Container, Loader } from './styles'

type LoadingProps = {
  value?: number | null
}

export default function Loading({ value }: LoadingProps) {
  return (
    <Container>
      <Loader />

      {!!value && <span>{value} %</span>}
    </Container>
  )
}
