import { Controller, useFormContext } from 'react-hook-form'
import ReactSelect, { StylesConfig } from 'react-select'

import { Options } from '@/@types'
import theme from '@/styles/themes/default'

import { InputProps } from '..'

const customStyles: StylesConfig<any, false> = {
  container: (provided, state) => ({
    ...provided,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    outline: 'none',
    opacity: state.isDisabled ? 0.6 : 1
  }),
  control: provided => ({
    ...provided,
    minHeight: '5.6rem',
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent'
  }),
  menu: provided => ({
    ...provided,
    zIndex: 12,
    borderRadius: theme.border.radius,
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    paddingTop: theme.spacings.xxsmall,
    paddingBottom: theme.spacings.xxsmall,
    boxShadow: '10px 10px 10px 1px rgba(0,0,0,0.2)'
  }),
  placeholder: provided => ({
    ...provided,
    marginLeft: theme.spacings.xxsmall
  }),
  input: provided => ({
    ...provided,
    marginLeft: theme.spacings.xxsmall,
    color: theme.colors.white
  }),
  singleValue: provided => ({
    ...provided,
    marginLeft: theme.spacings.xxsmall,
    color: theme.colors.black
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor:
      // @ts-ignore
      state.options.findIndex(p => p.value === state.value) % 2 === 0
        ? 'transparent'
        : theme.colors.gray,
    ':hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors.white10
    }
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
}

export default function Select({ name, ...rest }: InputProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <ReactSelect
          {...field}
          styles={customStyles}
          onChange={e => field.onChange(e ? e.value : null)}
          value={{
            label: rest.options?.find(p => p.value === field.value)?.label
          }}
          isDisabled={rest.disabled}
          {...rest}
        />
      )}
    />
  )
}

type SelectNoFormProps = {
  options: Options[]
  value: string
  onValueChange: (value: string) => void
  disabled?: boolean
}

export function SelectNoForm({
  onValueChange,
  options,
  value,
  disabled = false
}: SelectNoFormProps) {
  return (
    <ReactSelect
      styles={{
        ...customStyles,
        control: provided => ({
          ...provided,
          minHeight: '5.6rem',
          boxShadow: 'none',
          backgroundColor: 'transparent',
          border: theme.border.solid,
          borderRadius: theme.border.radius
        }),
        singleValue: (provided, { isDisabled }) => ({
          ...provided,
          color: isDisabled ? theme.colors.lightGray : theme.colors.white
        })
      }}
      options={options}
      value={{
        label: options.find(p => p.value === value)?.label
      }}
      isDisabled={disabled}
      // @ts-ignore
      onChange={e => onValueChange(e.value)}
    />
  )
}

