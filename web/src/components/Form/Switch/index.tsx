import { SwitchProps } from '@radix-ui/react-switch'

import { Background, Ball, Container } from './styles'

type SwitchComponenteProps = SwitchProps & {
  label: string
  onForm?: boolean
}

export default function Switch({
  label,
  onForm = false,
  ...rest
}: SwitchComponenteProps) {
  return (
    <Container onForm={onForm}>
      <Background onForm={onForm} {...rest}>
        <Ball />
      </Background>

      <label style={{ opacity: rest.disabled ? 0.6 : 1 }}>{label}</label>
    </Container>
  )
}
