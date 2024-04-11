import { useCallback } from 'react'

import { useAlert, useInternationalization, useLoading, useResponsive } from '@/hooks'
import { formatFullDateUTC } from '@/utils/dateUtils'
import { Yup } from '@/utils/yupUtils'
import { yupResolver } from '@hookform/resolvers/yup'

import { CardTitle, CardTitleLine } from '../Common/styles'

import { Container, Grid } from './styles'
import * as Form from '@/components/Form'
import { FormProvider, useForm } from 'react-hook-form'
import TasksService from '@/services/components/taskService'

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


export default function TasksCreate() {
  const { t, locale } = useInternationalization()
  const { showError, showSuccess } = useAlert()
  const { showLoading, hideLoading} = useLoading()
  const { isTabletOrMobile } = useResponsive()

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

  
  const onSubmit = useCallback(
    async (submitData: any) => {
      try {
        showLoading()
        // @ts-ignore
        console.log(submitData)
        await TasksService.create(submitData)
        reset()
        // @ts-ignore
        // setData({ ...data, components: [...data.components, newComponent] })
        console.log('Salvou')
        showSuccess(t('alert.attention'), t('task.createdSuccessfully'))
      } catch (err) {
        showError(t('alert.attention'), String(err))
      }
      hideLoading()
    },
    [
      locale,
      t
    ]
  )

  const { handleSubmit, reset } = methods

  return (
    <Container>
      <CardTitle>{t('form.create')}</CardTitle>
      <CardTitleLine />
      
     <Grid isTabletOrMobile={isTabletOrMobile}>
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
      </Grid>    
    </Container>
  )
}

