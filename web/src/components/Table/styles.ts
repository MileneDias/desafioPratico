import styled, { css } from 'styled-components'

export const Container = styled.table`
  ${({ theme }) => css`
    width: 100%;

    th {
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.black50};
      background-color: ${theme.colors.black30};
      padding-bottom: ${theme.spacings.xxsmall};
      border-bottom: ${theme.colors.black30};
      text-align: left;
    }

    td {
      padding: ${theme.spacings.xsmall} 0;
      border-bottom: ${theme.colors.black50};

      span {
        color: ${theme.colors.black};
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
