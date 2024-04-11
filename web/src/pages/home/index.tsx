
import AppContainer from '@/components/AppContainer'
import { useResponsive } from '@/hooks'

import {
  Grid,
} from './styles'
import TasksList from './TasksList'
import TasksCreate from './TasksCreate'

export default function Home() {
  const { isTabletOrMobile } = useResponsive()

  return (
    <AppContainer>
      <Grid isTabletOrMobile={isTabletOrMobile}>
        <TasksCreate />
        
        <TasksList />
      </Grid>
     
    </AppContainer>
  )
}
