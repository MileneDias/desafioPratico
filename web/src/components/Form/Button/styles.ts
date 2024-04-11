import styled, { css } from 'styled-components'

export const Container = styled.button<{
  selected: boolean
  secondary: boolean
}>`
  ${({ theme, selected, secondary }) => css`
    width: 100%;
    height: 5.6rem;

    margin-top: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xmsmall};
    border-radius: ${theme.border.radius};
    background: ${secondary
      ? theme.colors.green
      : selected
      ? theme.colors.lightGray
      : theme.colors.secondaryBlue};

    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.small};
    text-align: center;
    border: 1px solid
      ${selected ? theme.colors.lightGray : theme.colors.secondaryBlue};

    transition: ${theme.transition.medium};

    &:hover {
      border: 0.5px solid ${theme.colors.lightGray};
    }

    &:disabled {
      opacity: 0.6;
    }
  `}
`
