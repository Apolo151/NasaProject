import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Header from './Header';
import HeroSection from './HeroSection';
import Subscribe from './Subscribe';


function Homepage() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header></Header>
          <HeroSection></HeroSection>
          <Subscribe></Subscribe>
        </ThemeProvider>
      </>
    )
  }
  
  export default Homepage;