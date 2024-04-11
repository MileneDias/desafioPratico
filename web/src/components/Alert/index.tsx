import { useCallback, useState } from 'react'

import * as AlertDialog from '@radix-ui/react-alert-dialog'

import {
  ButtonsContainer,
  Button,
  Content,
  Overlay,
  Text,
  Title
} from './styles'

export type AlertProps = {
  buttons?: string[]
  buttonsColors?: string[]
  icon: 'success' | 'error' | 'warning' | 'signOut'
  onButtonClick?: (index: number) => void
  onClose?: () => void
  text: string
  title: string
}

export default function Alert({
  buttons = [],
  buttonsColors = [],
  icon,
  onButtonClick = () => {},
  onClose,
  text,
  title
}: AlertProps) {
  const [open, setOpen] = useState(true)

  const handleClose = useCallback(
    (index: number) => {
      setOpen(false)
      if (onClose) {
        onClose()
      }
      onButtonClick(index)
    },
    [onButtonClick, onClose]
  )

  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Portal>
        <Overlay />

        <Content>
          <img src={`/alert/${icon}.svg`} />

          <Title>{title}</Title>
          <Text dangerouslySetInnerHTML={{ __html: text }} />

          <ButtonsContainer>
            {buttons.map((button, index) => (
              <Button key={button} color={buttonsColors[index]} asChild>
                <button onClick={() => handleClose(index)}>{button}</button>
              </Button>
            ))}
          </ButtonsContainer>
        </Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
