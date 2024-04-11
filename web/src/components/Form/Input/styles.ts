import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.xmsmall} 0;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.small};

    display: block;
    margin-left: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Wrapper = styled.div<{ isError: boolean }>`
  ${({ theme, isError }) => css`
    width: 100%;
    height: 5.6rem;

    position: relative;

    border-radius: ${theme.border.radius};
    border: ${theme.border.solid};

    display: flex;
    align-items: center;

    input {
      width: 100%;
      height: 100%;

      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xmedium};

      padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
      padding-right: ${theme.spacings.medium};

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        transition: all 5000s ease-in-out 0s;
      }

      &::placeholder {
        color: ${theme.colors.lightGray};
        font-size: ${theme.font.sizes.small};
      }

      &::-ms-reveal,
      &::-ms-clear {
        display: none;
      }

      &:disabled {
        opacity: 0.5;
      }
    }

    ${isError &&
    css`
      border-color: red;
    `}

    .react-datepicker,
    .react-datepicker__time,
    .react-datepicker__month-container {
      background-color: ${theme.colors.white30};
      border: 0;
      border-radius: ${theme.border.radius};
    }

    .react-datepicker-wrapper,
    .react-datepicker__input-container {
      width: 100%;

      input {
        width: 100%;
      }
    }

    .react-datepicker-popper {
      html {
        font-size: 100%;
      }
    }

    .react-datepicker__close-icon::after {
      background-color: transparent;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.large};
    }

    .react-datepicker__day-names {
      margin: ${theme.spacings.xxsmall} 0;
    }

    .react-datepicker-time__header,
    .react-datepicker__current-month {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xmedium};
    }

    .react-datepicker__day-name {
      color: ${theme.colors.black};
      width: auto;
      font-size: ${theme.font.sizes.xmedium};
      padding: 0 ${theme.spacings.xxsmall};
    }

    .react-datepicker__time-list-item,
    .react-datepicker__day {
      color: ${theme.colors.black};
      width: ${theme.spacings.small};
      font-size: ${theme.font.sizes.xmedium};
      margin: ${theme.spacings.xxsmall} ${theme.spacings.xmsmall};
    }

    .react-datepicker__header {
      background-color: ${theme.colors.white10};
      border-top-left-radius: ${theme.border.radius};
      border-top-right-radius: ${theme.border.radius};
    }

    .react-datepicker__month {
      margin: 0;
      background-color: ${theme.colors.white10};
      border-bottom-left-radius: ${theme.border.radius};
      border-bottom-right-radius: ${theme.border.radius};
    }

    .react-datepicker__day--selected {
      background-color: ${theme.colors.white};
    }

    .react-datepicker__week {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  `}
`

export const Error = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: red;

    display: flex;
    align-items: center;
  `}
`

export const EyeButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 1.2rem;
`
