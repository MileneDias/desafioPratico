import styled, { css } from 'styled-components'

export const Grid = styled.div<{ isTabletOrMobile: boolean }>`
  ${({ }) => css`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    grid-template-areas:
      'Create Create'
      'Create Create'
      'List List'
      'List List'
      };
  `}
`
