import * as AlertDialog from '@radix-ui/react-alert-dialog'
import styled, { css } from 'styled-components'

export const Overlay = styled(AlertDialog.Overlay)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white30};
    position: fixed;
    inset: 0;
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 10000;

    @keyframes overlayShow {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}
`

export const Content = styled(AlertDialog.Content)`
  ${({ theme }) => css`
    background-color: rgba(7, 33, 76);
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.medium};

    width: 100%;
    height: 100%;
    max-width: 50rem;
    max-height: 35rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 8px 8px 50px 1px ${theme.colors.black};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10001;

    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

    @keyframes contentShow {
      from {
        opacity: 0;
        transform: translate(-50%, -48%) scale(0.96);
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }

    img {
      width: 100%;
      height: 8rem;

      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const Title = styled(AlertDialog.Title)`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
  `}
`

export const Text = styled(AlertDialog.Description)`
  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.small};
    text-align: center;
  `}
`

export const ButtonsContainer = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: space-around;
`

export const Button = styled(AlertDialog.Action)<{ color: string }>`
  ${({ theme, color }) => css`
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.small};

    width: 20rem;
    height: 4rem;

    border-radius: ${theme.border.radius};
    background-color: ${color};

    text-align: center;
  `}
`
