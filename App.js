import React from 'react';

import theme from './src/theme';
import { ThemeProvider } from 'styled-components/native';

import Routes from './src/routes'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}
