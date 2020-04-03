import React from 'react';
import {ThemeProvider} from 'theme-ui'

export default ({theme, children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)