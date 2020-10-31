import Todo from 'pages/Todo';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme'
import GlobalStyle from 'styles/global'

function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Todo />
      </ThemeProvider>
    </>
  );
}

export default App;
