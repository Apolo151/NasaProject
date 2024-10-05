import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Subscribe.css';

export default function Subscribe() {
  // State to store email
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Send email to backend or API
      console.log(`Subscribed with email: ${email}`);
      alert('Subscription successful!');
      // Reset email field
      setEmail('');
    } else {
      alert('Please enter a valid email!');
    }
  };

  return (
    <Box className="subscribe-container">
      <Typography variant="h3" className="subscribe-title">
        Stay Updated with STP Eagles
      </Typography>
      <Typography variant="h6" className="subscribe-subtitle">
        Subscribe for weather alerts and more!
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: '400px',
          margin: 'auto',
        }}
      >
        {/* Email Field */}
        <TextField
          label="Enter your email"
          variant="outlined"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{
            backgroundColor: '#fff',
            borderRadius: '5px',
          }}
        />

        {/* Subscribe Button */}
        <Button
          variant="contained"
          className="subscribe-button"
          type="submit"
          sx={{
            fontSize: '1.2rem',
            padding: '0.8rem',
            borderRadius: '30px',
          }}
        >
          Subscribe Now
        </Button>
      </Box>
    </Box>
  );
}
