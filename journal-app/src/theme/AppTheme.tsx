import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';

import { ReactNode } from 'react';

const AppTheme = ({children}: {children: ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>      
  )
}

export default AppTheme
