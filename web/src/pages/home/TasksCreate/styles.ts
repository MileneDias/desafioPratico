import styled, { css } from 'styled-components'

import { BaseCard } from '../Common/styles'

export const Container = styled(BaseCard)`
  grid-area: Create;
`

export const Grid = styled.div<{ isTabletOrMobile: boolean }>`
  ${({ theme, isTabletOrMobile }) => css`
    display: grid;
    grid-template-columns: ${isTabletOrMobile ? '1fr' : '1fr'};
    background-color: ${theme.colors.white};
    
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `}
`