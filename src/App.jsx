import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import { ThemeProvider, CssBaseline, createTheme } from '@material-ui/core';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Subscribe from './components/Subscribe';
import Dashboard from './components/Dashboard';

// Define the theme for Material-UI components
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Your primary color
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
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          {/* Dashboard route */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Homepage route */}
          <Route path="/" element={<>
            <HeroSection />
            <Subscribe />
          </>} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
