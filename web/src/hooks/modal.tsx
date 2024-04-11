import {
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useState
} from 'react'
import Modal from 'react-modal'

import { ComponentProps } from '@/@types'

import { LoadingProvider } from './loading'

type Size = 'SMALL' | 'MEDIUM' | 'LARGE' | 'EXTRA_LARGE'

type ModalContextData = {
  open: () => void
  close: () => void
  setContent: (child: ReactNode, size?: Size, onClose?: () => void) => void
}

type OnCloseCallbackType = {
  onClose: () => {}
}

const MODAL_WIDTH_SIZE = {
  SMALL: '60rem',
  MEDIUM: '100rem',
  LARGE: '140rem',
  EXTRA_LARGE: '90%'
}

const MODAL_HEIGHT_SIZE = {
  SMALL: '30rem',
  MEDIUM: '45rem',
  LARGE: '65rem',
  EXTRA_LARGE: '90%'
}

Modal.setAppElement('#root')

const ModalContext = createContext<ModalContextData>({} as ModalContextData)

function ModalProvider({ children }: ComponentProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [child, setChild] = useState(null as ReactNode)
  const [size, setModalSize] = useState<Size>('LARGE')
  const [onCloseCallback, setOnCloseCallback] = useState<OnCloseCallbackType>()

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => {
    setIsOpen(false)
    if (onCloseCallback?.onClose) {
      onCloseCallback?.onClose()
    }
  }, [onCloseCallback])

  const setContent = useCallback(
    (child: ReactNode, size: Size = 'LARGE', onClose: any) => {
      setChild(child)
      setModalSize(size)
      setOnCloseCallback({ onClose })
    },
    []
  )

  return (
    <ModalContext.Provider value={{ open, close, setContent }}>
      {children}

      <Modal
        isOpen={isOpen}
        onRequestClose={close}
        overlayClassName="modal-overlay"
        className="modal-content"
        style={{
          content: {
            maxWidth: MODAL_WIDTH_SIZE[size],
            minHeight: MODAL_HEIGHT_SIZE[size]
          }
        }}
      >
        <button className="close-modal" type="button" onClick={close}>
          <img src="/global/close.svg" />
        </button>

        <LoadingProvider>{child}</LoadingProvider>
      </Modal>
    </ModalContext.Provider>
  )
}

function useModal(): ModalContextData {
  const context = useContext(ModalContext)

  return context
}

export { ModalProvider, useModal }
