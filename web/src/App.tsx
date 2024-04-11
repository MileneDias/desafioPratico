import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from '@/styles/global'
import theme from '@/styles/themes/default'
import { ThemeProvider } from 'styled-components'

import AppProvider from './hooks/provider'
import Routes from './routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppProvider>
          <Routes />
          <GlobalStyle />
        </AppProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
