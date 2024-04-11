import * as Switch from '@radix-ui/react-switch'
import styled, { css } from 'styled-components'

type OnFormProps = {
  onForm: boolean
}

export const Container = styled.div<OnFormProps>`
  ${({ theme, onForm }) => css`
    display: flex;
    align-items: center;

    margin-bottom: ${theme.spacings.small};

    ${onForm &&
    css`
      min-width: 33%;
      flex-direction: column-reverse;
    `}

    label {
      margin-left: ${theme.spacings.xmsmall};

      font-weight: ${theme.font.medium};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Background = styled(Switch.Root)<OnFormProps>`
  ${({ theme, onForm }) => css`
    width: 3.6rem;
    height: 1.8rem;
    border-radius: 9999px;

    background-color: ${theme.colors.lightGray};
    position: relative;

    display: flex;
    align-items: center;

    transition: ${theme.transition.medium};

    &[data-state='checked'] {
      background-color: ${theme.colors.secondaryBlue};
    }

    &[data-disabled] {
      opacity: 0.6;
    }

    ${onForm &&
    css`
      margin-top: ${theme.spacings.medium};
    `}
  `}
`

export const Ball = styled(Switch.Thumb)`
  ${({ theme }) => css`
    display: block;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 0.7rem;

    background-color: ${theme.colors.white};

    transform: translateX(2px);

    transition: ${theme.transition.medium};

    &[data-state='checked'] {
      transform: translateX(20px);
    }

    &[data-disabled] {
      opacity: 0.6;
    }
  `}
`
