import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: ${theme.colors.gradients.home};
    
    align-items: center;
    justify-content: space-between;

    height: 5.5rem;

    article {
      margin: 0 auto;
      align-items: center;
      font-size: ${theme.font.sizes.big};
      font-weight: ${theme.font.extra};
      color: ${theme.colors.black50};

      background-color: ${theme.colors.gradients.home};
    }

    article:first-of-type {
      margin-left: 0;

      display: flex;
      align-items: center;

      button {
        margin-right: ${theme.spacings.xxlarge};
      }

      > img {
        margin-left: ${theme.spacings.xxlarge};
      }
    }

    article:last-of-type {
      margin-right: 0;
    }
  `}
`

export const User = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      width: 2.5rem;
      height: 2.5rem;
    }

    span {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.large};
      margin-right: ${theme.spacings.xxsmall};

      display: flex;
      align-items: center;

      img {
        margin-right: ${theme.spacings.xmsmall};
      }
    }

    > img {
      margin: 0 ${theme.spacings.small};
    }
  `}
`

export const RightContent = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-top: 0px;
  }
`
