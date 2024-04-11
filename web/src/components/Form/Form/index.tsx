import { CSSProperties, forwardRef, useImperativeHandle } from 'react'
import { FormProvider, UseFormReturn, useForm } from 'react-hook-form'

import { ComponentProps } from '@/@types'
import { yupResolver } from '@hookform/resolvers/yup'
import { ObjectSchema } from 'yup'

type FormProps = ComponentProps & {
  onSubmit: (data: any) => void
  schema?: ObjectSchema<any>
  style?: CSSProperties
  defaultData?: any
}

export type FormRef = UseFormReturn<any, any>

const Form = forwardRef<FormRef, FormProps>(
  ({ children, onSubmit, defaultData, schema, style }, ref) => {
    const methods = useForm({
      defaultValues: defaultData,
      resolver: schema ? yupResolver(schema) : undefined
    })
    const { handleSubmit } = methods

    useImperativeHandle(ref, () => ({ ...methods }))

    return (
      <FormProvider {...methods}>
        <form style={style} onSubmit={handleSubmit(onSubmit)}>
          {children}
        </form>
      </FormProvider>
    )
  }
)

export default Form
