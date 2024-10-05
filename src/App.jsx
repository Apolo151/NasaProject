import react from 'react'
import './App.css'
import Header from "./components/Header"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import HeroSection from './components/HeroSection';
import Subscribe from './components/Subscribe';
// Create a custom theme
const theme = createTheme({
  palette: {
    mode: 'light',  // You can switch between 'light' and 'dark'
    primary: {
      main: '#1b5e20', // Your primary color
    },
    secondary: {
      main: '#fff', // Your secondary color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});


function App() {
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

export default App
