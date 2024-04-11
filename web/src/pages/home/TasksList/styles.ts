import styled, { css } from 'styled-components'

import { BaseCard } from '../Common/styles'

export const Container = styled(BaseCard)`
  grid-area: List;
`

export const Item = styled.tr<{ isHeader?: boolean }>`
  ${({ theme, isHeader = false }) => css`
    display: flex;
    width: 100%;
    padding: 0 ${theme.spacings.xxsmall};

    span,
    strong {
      margin: ${theme.spacings.xxsmall};
    }

    > section {
      display: flex;
      align-items: center;
      justify-content: space-around;

      height: 25px;
      border-bottom: ${theme.border.solidWhite30};

      position: relative;

      ${!isHeader &&
      css`
        & + section {
          &::before {
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            height: 100%;
            width: 2px;
            background-color: ${theme.colors.white};
          }
        }
      `}

      div {
        width: 100%;
        text-align: center;
      }
    }
  `}
`

export const SelectContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 8fr 5fr 2fr;
    grid-gap: ${theme.spacings.xxsmall};

    margin: ${theme.spacings.medium} 0;
  `}
`