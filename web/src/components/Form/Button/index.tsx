import { ButtonHTMLAttributes } from 'react'

import { ComponentProps } from '@/@types'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentProps & {
    selected?: boolean
    secondary?: boolean
  }

export default function Button({
  children,
  selected = false,
  secondary = false,
  ...rest
}: ButtonProps) {
  return (
    <Container
      type="button"
      {...rest}
      secondary={secondary}
      selected={selected}
    >
      {children}
    </Container>
  )
}
