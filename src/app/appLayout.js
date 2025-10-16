"use client"

import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '@/components/Header';
import { darkTheme, lightTheme } from '@/theme/theme';

const AppLayout = ({ children }) => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') 
    if (storedTheme) {
      setMode(storedTheme);
    }
  }, []);
  
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