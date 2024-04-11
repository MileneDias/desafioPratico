import { useCallback, useEffect, useState } from 'react'

import { useAlert, useInternationalization, useLoading } from '@/hooks'
import InfiniteScroll from 'react-infinite-scroll-component'

import Table from '@/components/Table'
import { CardTitle, CardTitleLine } from '../Common/styles'
import { useModal } from '@/hooks/modal'
import { Container, Item } from './styles'
import TasksService from '@/services/components/taskService'
import { Task } from '@/models/tasks'
import ModalEmployee from './ModalEmployee'
import { formatFullDateUTC } from '@/utils/dateUtils'


const data = [{
      id: '1',
      title: "Academia",
      description: "Não pular o treino de perna",
      date: new Date().getTime().toFixed(),
      owner: "Milene",
      status: "Em análise",
}, {
      id: '2',
      title: "Academia",
      description: "Não pular o treino de perna",
      date: new Date().getTime().toFixed(),
      owner: "Milene",
      status: "Em análise",
  }, {
      id: '3',
      title: "Academia",
      description: "Não pular o treino de perna",
      date: new Date().getTime().toFixed(),
      owner: "Milene",
      status: "Em análise",
  }, {
      id: '4',
      title: "Academia",
      description: "Não pular o treino de perna",
      date: new Date().getTime().toFixed(),
      owner: "Milene",
      status: "Em análise",
  }, {
      id: '4',
      title: "Academia",
      description: "Não pular o treino de perna",
      date: new Date().getTime().toFixed(),
      owner: "Milene",
      status: "Em análise",
  }, {
      id: '5',
      title: "Academia",
      description: "Não pular o treino de perna",
      date: new Date().getTime().toFixed(),
      owner: "Milene",
      status: "Em análise",
  }]

export default function TasksList() {
  const { showError, showSuccess, showAlertBase } = useAlert()
  const { showLoading, hideLoading } = useLoading()
  const { open, setContent } = useModal()
  const [items, setItems] = useState<Task[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)
  const { t, locale } = useInternationalization()

  useEffect(() => {
    setHasMore(true)
    setPageNumber(1)
    setItems(data)
  }, [ TasksService])

  const onNextItems = useCallback(() => {
    setHasMore(items.length !== data.length)

    setItems(p => p.concat())
    setPageNumber(p => p + 1)
  }, [items.length, pageNumber, data])

  const fontSize = Number(
    window
      .getComputedStyle(document.getElementsByTagName('html')[0], null)
      .getPropertyValue('font-size')
      .replace('px', '')
  )

  const handleOpenModal = useCallback((id: any, data: any) => {
    setContent(
      <ModalEmployee id={id} data={data} />, 'MEDIUM'
    )
    open()

  }, [open, setContent])
  const onDeleteRegister = useCallback(
    (registerId: string) => {
      showAlertBase({
        title: t('alert.deleteTitle') + '!',
        text: t('alert.deleteMessageRegister'),
        icon: 'warning',
        buttons: [t('alert.cancel'), t('alert.delete')],
        onButtonClick: async (index: number) => {
          if (index === 1) {
             try {
              showLoading()
              // @ts-ignore
              const newComponent = await TasksService.delete(registerId)
              // @ts-ignore
              console.log('Salvou')
              showSuccess(t('alert.attention'), t('task.createdSuccessfully'))
            } catch (err) {
              showError(t('alert.attention'), String(err))
            }
            hideLoading()
          }
        }
      })
    },
    [
      hideLoading,
      showAlertBase,
      showLoading,
      t
    ]
  )

  return (
    <Container>
      <CardTitle>{t('form.list')}</CardTitle>
      <CardTitleLine />
      <Item isHeader>
        <section style={{ width: '10%' }}>
          <strong>{t('task.date')}</strong>
        </section>

        <section style={{ width: '10%' }}>
          <strong>{t('task.title')}</strong>
        </section>

        <section style={{ width: '10%' }}>
          <strong>{t('task.status')}</strong>
        </section>

        <section style={{ width: '10%' }}>
          <strong>{t('task.owner')}</strong>
        </section>
        <section style={{ width: '50%' }}>
          <strong>{t('task.description')}</strong>
        </section>
        <section style={{ width: '10%' }}>
          <strong>{t('task.actions')}</strong>
        </section>
        
      </Item>
      <Table
        body={
          <InfiniteScroll
            dataLength={items.length}
            next={onNextItems}
            height={fontSize * 42}
            hasMore={hasMore}
            loader={<div />}
          >
            {items.map((p, index) => (
              <Item key={index}>
                <section style={{ width: '10%' }}>
                  <div>{formatFullDateUTC(p.date, locale)}</div>
                </section>
                <section style={{ width: '10%' }}>
                  <div>{p.title}</div>
                </section>
                <section style={{ width: '10%' }}>
                  <div>{p.status}</div>
                </section>
                <section style={{ width: '10%' }}>
                  <div>{p.owner}</div>
                </section>
                <section style={{ width: '50%' }}>
                  <div>{p.description}</div>
                </section>
                <section style={{ width: '10%' }}>
                  <button onClick={() => handleOpenModal(p.id, p)}>
                    <img src="/global/edit.svg" />
                  </button>
                  <button onClick={() => onDeleteRegister(p.id)}>
                    <img src="/global/trash.svg" />
                  </button>
                </section>
              </Item>
            ))}
          </InfiniteScroll>
        }
      />
    </Container>
  )
}
