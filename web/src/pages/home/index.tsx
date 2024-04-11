
import AppContainer from '@/components/AppContainer'
import { useResponsive } from '@/hooks'

import {
  Grid,
} from './styles'
import TasksList from './TasksList'
import TasksCreate from './TasksCreate'
import { useCallback, useState } from 'react'
import { TasksContext } from './context'
export default function Home() {
  const { isTabletOrMobile } = useResponsive()

  const [data, setData] = useState<any>()

  const updateData = useCallback((information: any) => {
    setData((p: any) => ({ ...p, ...information }))
  }, [])

  return (
    <AppContainer>
      <TasksContext.Provider value={{ data, updateData }}>

      
      <Grid isTabletOrMobile={isTabletOrMobile}>
        <TasksCreate />
        
        <TasksList />
      </Grid>
     </TasksContext.Provider>
    </AppContainer>
  )
}
