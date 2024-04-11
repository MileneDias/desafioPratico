import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    
    padding: ${theme.spacings.xmsmall};
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    border-radius: ${theme.spacings.xxsmall};
  `}
`

export const Body = styled.div`
  position: relative;

  width: 100%;
  display: flex;
`

export const Menu = styled.aside<{
  isOpen: boolean
  isTabletOrMobile: boolean
}>`
  ${({ theme, isOpen, isTabletOrMobile }) => css`
    ${!isTabletOrMobile &&
    css`
      transition: ${theme.transition.medium};

      background: ${theme.colors.gradients.menu};
    `}

    width: 0px;

    ${isOpen &&
    css`
      width: 30rem;
      border: ${theme.border.solidWhite30};
    `}

    margin: ${theme.spacings.xmsmall} 0;
    margin-bottom: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100vh - 3.2rem - 3.2rem - 5.5rem);

    z-index: 10;

    display: flex;
    flex-direction: column;
    overflow-y: auto;

    padding: ${theme.spacings.small};

    > div {
      > button {
        margin-bottom: ${theme.spacings.xmsmall};
      }
    }
  `}
`

export const AppTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.extra};
    font-size: ${theme.font.sizes.big};
    margin-bottom: ${theme.spacings.xmsmall};
  `}
`

export const AppSubTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.lightGray};
  `}
`

export const AppContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    border: ${theme.border.solidWhite30};
    border-radius: ${theme.border.radius};
    background: ${theme.colors.gradients.base};

    margin-top: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xsmall};
  `}
`
