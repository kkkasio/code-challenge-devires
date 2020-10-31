import Todo from 'pages/Todo';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import GlobalStyle from 'styles/global';

import store from 'store';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Todo />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
