import styled, { css } from 'styled-components'

export const Container = styled.table`
  ${({ theme }) => css`
    width: 50%;

    th {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.white};
      padding-bottom: ${theme.spacings.xxsmall};
      border-bottom: ${theme.border.solidWhite30};
      text-align: left;
    }

    td {
      padding: ${theme.spacings.xsmall} 0;
      border-bottom: ${theme.border.solidWhite30};

      span {
        color: ${theme.colors.lightGray};
      }

      > img {
        width: 3rem;
      }
    }

    tr:nth-child(even) {
      background-color: ${theme.colors.black30};
    }
  `}
`
