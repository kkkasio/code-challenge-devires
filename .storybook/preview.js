import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import store from 'store'

export const decorators = [
  (Story) => (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
    </Provider>
  )
]
