import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    flex-direction: column;

    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.white30};

    span {
      position: absolute;
      font-size: ${theme.font.sizes.big};
      font-weight: ${theme.font.bold};
    }
  `}
`

export const Loader = styled.div`
  ${({ theme }) => css`
    border: 12px solid ${theme.colors.lightGray};
    border-top: 12px solid ${theme.colors.primaryBlue};
    border-radius: 50%;
    width: 20rem;
    height: 20rem;
    animation: spin 1s ease-in-out infinite;
    margin: 0 auto;
    z-index: 1;

    span {
      top: 50rem;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`
