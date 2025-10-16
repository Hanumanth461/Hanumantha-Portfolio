"use client"

import React, { useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '@/components/Header';
import { darkTheme, lightTheme } from '@/theme/theme';

const AppLayout = ({ children }) => {

   const themeVal = localStorage.getItem("theme")  ?? "light"
  const [mode, setMode] = useState(themeVal);

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <Header mode={mode} setMode={setMode} />
        {children}
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default AppLayout