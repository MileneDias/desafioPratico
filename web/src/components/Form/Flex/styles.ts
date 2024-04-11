import styled, { css } from 'styled-components'

export const Container = styled.div<{ isTabletOrMobile: boolean }>`
  ${({ theme, isTabletOrMobile }) => css`
    width: 100%;

    form {
      width: 100%;
    }

    display: flex;
    flex-direction: ${isTabletOrMobile ? 'column' : 'row'};
    align-items: center;

    > div:first-child,
    > form:first-child {
      margin-right: ${theme.spacings.xxsmall};
    }

    > div + div {
      margin: 0 ${theme.spacings.xxsmall};
    }

    > form + div {
      margin: 0 ${theme.spacings.xxsmall};
    }

    > div + form {
      margin: 0 ${theme.spacings.xxsmall};
    }

    > div + div:last-child,
    > form:last-child {
      margin-right: 0;
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
