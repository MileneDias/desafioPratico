import styled, { css } from 'styled-components'

export const BaseCard = styled.div`
  ${({ theme }) => css`
    border: ${theme.border.solidWhite30};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium};

    min-height: 40rem;
  `}
`

export const CardTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
    margin-bottom: ${theme.spacings.xmsmall};
    background-color: ${theme.colors.white};
    position: relative;

    button {
      position: absolute;
      right: 0px;
      top: -2px;

      transition: all 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }
  `}
`

export const CardTitleLine = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 0.2rem;
    margin-bottom: ${theme.spacings.xmsmall};
    
    background-color: ${theme.colors.white};
  `}
`

export const CardSubTitle = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Charts = styled.div`
  ${({ theme }) => css`
    border: ${theme.border.solidWhite30};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
  `}
`

export const ChartCard = styled(BaseCard)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    padding-top: ${theme.spacings.medium};
  `}
`

export const HeaderCard = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    background-color: ${theme.colors.white};
    height: 25rem;

    border-radius: ${theme.border.radius};

    padding: ${theme.spacings.small};

    position: relative;
  `}
`

export const HeaderLine = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: ${theme.spacings.small};
    margin-right: 40rem;

    > div {
      margin-bottom: 0;
    }
  `}
`

export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const HeaderTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.big};
  `}
`
