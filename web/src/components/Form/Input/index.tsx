import { InputHTMLAttributes, useMemo, useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { useFormContext, Controller } from 'react-hook-form'

import 'react-datepicker/dist/react-datepicker.css'

import { Caractere, Options } from '@/@types'
import { useInternationalization } from '@/hooks/internationalization'
import { getLocale } from '@/utils/dateUtils'

import Select from './Select'
import { Container, Error, EyeButton, Label, Wrapper } from './styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
  password?: boolean
  mask?: Caractere[]
  options?: Options[]
}

export default function Input({
  label,
  name,
  password = false,
  mask = [],
  options = undefined,
  type,
  ...rest
}: InputProps) {
  const { t, locale } = useInternationalization()
  const [eyeOpened, setEyeOpened] = useState(false)

  const {
    register,
    formState: { errors },
    control
  } = useFormContext()

  const error = errors[name]?.message?.toString()

  const labelWithOutDoubleDot = useMemo(() => {
    let text = label ?? ''
    const lastIndex = text?.lastIndexOf(':')
    if (lastIndex !== -1) {
      text = text?.slice(0, lastIndex) + text?.slice(lastIndex + 1)
    }
    return text
  }, [label])

  return (
    <Container>
      {label && <Label>{labelWithOutDoubleDot}</Label>}

      <Wrapper isError={!!error}>
        {options ? (
          <Select name={name} options={options} {...rest} />
        ) : type === 'date' || type === 'datetime' ? (
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <ReactDatePicker
                id={name}
                name={name}
                selected={field.value}
                // @ts-ignore
                onChange={p => field.onChange(p)}
                dateFormat={
                  type === 'datetime' ? 'dd/MM/yyyy HH:mm:ss' : 'dd/MM/yyyy'
                }
                locale={locale.code}
                autoComplete="off"
                popperPlacement="bottom"
                showTimeSelect={type === 'datetime'}
                timeIntervals={5}
                timeCaption="Time"
                {...rest}
              />
            )}
          />
        ) : (
          <input
            {...register(name)}
            autoComplete="off"
            {...rest}
            type={password && !eyeOpened ? 'password' : type}
          />
        )}

        {password && (
          <EyeButton
            type="button"
            tabIndex={-1}
            onClick={() => setEyeOpened(!eyeOpened)}
          >
            <img src="/global/eye.svg" />
          </EyeButton>
        )}
      </Wrapper>

      {error && <Error>{t(error)}</Error>}
    </Container>
  )
}
