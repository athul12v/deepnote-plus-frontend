import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Switch,
  FormControlLabel,
} from '@mui/material';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle Logout
  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  // Toggle Dark Mode
  const handleDarkModeChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem('darkMode', !isDarkMode); // Save preference in localStorage
  };

  // Load Dark Mode preference on page load
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f5f5f5',
        margin: 0,
        padding: 3,
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            background: '#fff',
            color: '#333',
            borderRadius: 2,
            padding: 3,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 500, marginBottom: 3 }}>
            Settings
          </Typography>

          {/* Dark Mode Section */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: 1 }}>
              Dark Mode
            </Typography>
            <FormControlLabel
              control={<Switch color="primary" checked={isDarkMode} onChange={handleDarkModeChange} />}
              label="Enable Dark Mode"
              sx={{
                '.MuiFormControlLabel-label': {
                  fontSize: '14px',
                  fontWeight: 400,
                },
              }}
            />
          </Box>

          {/* Account Section */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: 1 }}>
              Manage Account
            </Typography>
            <Button
              fullWidth
              sx={{
                color: '#00bcd4',
                textTransform: 'none',
                border: '1px solid #00bcd4',
                '&:hover': {
                  background: '#00bcd4',
                  color: '#fff',
                },
              }}
            >
              Edit Profile
            </Button>
          </Box>

          {/* API Keys Section */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: 1 }}>
              API Keys
            </Typography>
            <Button
              fullWidth
              sx={{
                color: '#00bcd4',
                textTransform: 'none',
                border: '1px solid #00bcd4',
                '&:hover': {
                  background: '#00bcd4',
                  color: '#fff',
                },
              }}
            >
              Manage API Keys
            </Button>
          </Box>

          {/* Help Section */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: 1 }}>
              Help & FAQs
            </Typography>
            <Button
              fullWidth
              component="a"
              href="https://your-help-center-url.com"
              target="_blank"
              sx={{
                color: '#00bcd4',
                textTransform: 'none',
                border: '1px solid #00bcd4',
                '&:hover': {
                  background: '#00bcd4',
                  color: '#fff',
                },
              }}
            >
              Visit Help Center
            </Button>
          </Box>

          {/* Privacy Section */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: 1 }}>
              Privacy Policy
            </Typography>
            <Button
              fullWidth
              component="a"
              href="https://your-privacy-policy-url.com"
              target="_blank"
              sx={{
                color: '#00bcd4',
                textTransform: 'none',
                border: '1px solid #00bcd4',
                '&:hover': {
                  background: '#00bcd4',
                  color: '#fff',
                },
              }}
            >
              Read Privacy Policy
            </Button>
          </Box>

          {/* Feedback Section */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: 1 }}>
              Send Feedback
            </Typography>
            <Button
              fullWidth
              sx={{
                color: '#00bcd4',
                textTransform: 'none',
                border: '1px solid #00bcd4',
                '&:hover': {
                  background: '#00bcd4',
                  color: '#fff',
                },
              }}
            >
              Provide Feedback
            </Button>
          </Box>

          {/* Logout Button */}
          <Box sx={{ mt: 3 }}>
            <Button
              fullWidth
              onClick={handleLogout}
              sx={{
                background: '#ff1744',
                color: '#fff',
                textTransform: 'none',
                '&:hover': {
                  background: '#d50000',
                },
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Settings;
