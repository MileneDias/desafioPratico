import styled, { css } from 'styled-components'

export const LanguageContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};

    display: flex;
    justify-content: center;

    button {
      margin: 0 ${theme.spacings.xxsmall};
    }
  `}
`
