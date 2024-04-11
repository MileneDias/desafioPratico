import { useCallback, useState } from 'react'

import * as Form from '@/components/Form'
import { useInternationalization } from '@/hooks/internationalization'
import { useModal } from '@/hooks/modal'
import { formatFullDateUTC, formatHour, getDateBySeconds } from '@/utils/dateUtils'
import TasksService from '@/services/components/taskService'
import { Yup } from '@/utils/yupUtils'

import { CardTitle, CardTitleLine } from '@/pages/home/Common/styles'
import { useAlert } from '@/hooks/alert'
import { useLoading } from '@/hooks/loading'
import MaskPattern from '@/utils/maskUtils'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useResponsive } from '@/hooks/responsive'

type ModalEmployeeProps = {
  id: string
  data: any
}

const schema = Yup.object().shape({
    title: Yup.string()
    .required('form.required'),
  description: Yup.string()
    .required('form.required')
    .min(10, 'form.screenBrightnessMin')
    .max(100, 'form.screenBrightnessMax'),
  date: Yup.string()
    .required('form.required'),
  status: Yup.string()
    .required('form.required'),
  owner: Yup.string()
    .required('form.required')
    .max(13, 'form.caracteresLimit')
})


export default function ModalEmployee({id, data}: ModalEmployeeProps) {
  const { t, locale } = useInternationalization()
    const { close } = useModal()
    const { isTabletOrMobile } = useResponsive()
    const { showError, showSuccess } = useAlert()
    const { showLoading, hideLoading} = useLoading()

  const onSubmit = useCallback(
    async(submitData: any) => {
      try {
          showLoading()
          
          await TasksService.update(id, submitData)
          reset()
        // @ts-ignore
        showSuccess(t('alert.attention'), t('task.createdSuccessfully'))
      } catch (err) {
        showError(t('alert.attention'), String(err))
      }
      hideLoading()
      close()
    },
    [ close, id]
  )

const methods = useForm({
    defaultValues: {
      title: '',
      description: '',
      owner: '',
      status:'Em Andamento',
      date: formatFullDateUTC(new Date(), locale)
      },
      resolver: yupResolver(schema)
  })

    const { handleSubmit, reset } = methods
  return (
    <>
        <CardTitle>{t('task.information')}</CardTitle>
        <CardTitleLine />
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Flex isTabletOrMobile={isTabletOrMobile}>
                <Form.Input
                    name="title"
                    label={t('task.title')}
                    placeholder={t('placeholder.titlePlaceholder')}
                />
                <Form.Input
                    name="date"
                    type='dateTime'
                    label={t('task.date')}
                    mask={MaskPattern.FullTimeMask}      
                />
                <Form.Input
                    name="owner"
                    label={t('task.owner')}
                    placeholder={t('placeholder.ownerPlaceholder')}
                />
                <Form.Input
                    name="status"
                    label={t('task.status')}
                    options={[{ label: "Em Andamento", value: 'Em Andamento' },
                        { label: "Em Análise", value: 'Em Analise' },
                        {label: "Concluído", value: 'Concluído'}
                    ]}
                />

            </Form.Flex>

            <Form.Flex>
                <Form.Input
                    name="description"
                    label={t('task.description')}
                    placeholder={t('placeholder.descriptionPlaceholder')}
                />
                
            </Form.Flex>
            
            <Form.Button
                style={isTabletOrMobile ? {} : { margin: '0 auto', width: '20rem' }}
                secondary
                type="submit"
            >
                {t('form.save')}
            </Form.Button>
            
            </form>
        </FormProvider>
    </>
  )
}
