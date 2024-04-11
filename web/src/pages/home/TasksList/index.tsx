import { useCallback, useContext, useEffect, useState } from 'react'

import { useInternationalization } from '@/hooks'
import { formatFullDateUTC } from '@/utils/dateUtils'
import InfiniteScroll from 'react-infinite-scroll-component'

import Table from '@/components/Table'
import { CardTitle, CardTitleLine } from '../Common/styles'

import { Container, Item } from './styles'
import { TasksContext } from '../context'

export default function TasksList() {
  // const { data } = useContext(TasksContext)
  
  const { t, locale } = useInternationalization()

const data = [
  {
    id: '1',
    title: "Teste",
    description: "Teste de lista",
    date: formatFullDateUTC(new Date(), locale) ,
    responsibleForTask: "Eduardo",
    status: "Em Andamento"
  }
]
  const [items, setItems] = useState(data)
  const [hasMore, setHasMore] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    // setHasMore(true)
    // setPageNumber(1)
    // setItems(data.slice(0, 30))
  }, [data])

  const onNextItems = useCallback(() => {
    setHasMore(items.length !== data.length)

    setItems(p => p.concat(data.slice(pageNumber * 30, (pageNumber + 1) * 30)))
    setPageNumber(p => p + 1)
  }, [items.length, pageNumber, data])

  const fontSize = Number(
    window
      .getComputedStyle(document.getElementsByTagName('html')[0], null)
      .getPropertyValue('font-size')
      .replace('px', '')
  )

  return (
    <Container>
      <CardTitle>{t('form.title')}</CardTitle>
      <CardTitleLine />
      <Item isHeader>
        <section style={{ width: '15%' }}>
          <strong>{t('task.date')}</strong>
        </section>

        <section style={{ width: '25%' }}>
          <strong>{t('task.title')}</strong>
        </section>

        <section style={{ width: '20%' }}>
          <strong>{t('task.status')}</strong>
        </section>

        <section style={{ width: '15%' }}>
          <strong>{t('task.owner')}</strong>
        </section>
        <section style={{ width: '25%' }}>
          <strong>{t('task.description')}</strong>
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
                <section style={{ width: '15%' }}>
                  <div>{p.date}</div>
                </section>
                <section style={{ width: '25%' }}>
                  <div>{p.title}</div>
                </section>
                <section style={{ width: '20%' }}>
                  <div>{p.status}</div>
                </section>
                <section style={{ width: '15%' }}>
                  <div>{p.responsibleForTask}</div>
                </section>
                <section style={{ width: '25%' }}>
                  <div>{p.description}</div>
                </section>
              </Item>
            ))}
          </InfiniteScroll>
        }
      />
    </Container>
  )
}
