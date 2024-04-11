import * as Yup from 'yup'

declare module 'yup' {
  interface StringSchema {
    convert(): StringSchema
    time(maxTime: string, message: string): StringSchema
    document(doc: 'CPF' | 'CNPJ', message: string): StringSchema
  }
}

Yup.addMethod<Yup.StringSchema>(
  Yup.string,
  'convert',
  function (this: Yup.StringSchema): Yup.StringSchema {
    return this.transform((_object, value) => {
      if (value) {
        return value.toString().replace(/[^0-9]+/g, '')
      }
      return ''
    })
  }
)

Yup.addMethod<Yup.StringSchema>(
  Yup.string,
  'time',
  function (
    this: Yup.StringSchema,
    maxTime: string,
    message: string
  ): Yup.StringSchema {
    return this.test('time', message, value => {
      if (value && value <= maxTime) {
        if (Number(value.split(':')[1]) > 59) {
          return false
        }
        return true
      }
      return false
    })
  }
)

export { Yup }
