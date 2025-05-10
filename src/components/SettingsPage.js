import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Switch,
  FormControlLabel,
  TextField,
  Stack,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider
} from '@mui/material';

const sections = [
  { key: 'profile', label: 'Profile' },
  { key: 'apikey', label: 'API Key' },
  { key: 'feedback', label: 'Feedback' },
  { key: 'appearance', label: 'Appearance' },
  { key: 'language', label: 'Language' },
  { key: 'terms', label: 'Terms & Privacy' },
];

export default function SettingsPage() {
  const [selected, setSelected] = useState('profile');
  const [isDarkMode, setIsDarkMode] = useState(false); // default light mode
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '',
  });
  const [apiKey] = useState('sk-1234-xxxx-xxxx');
  const [feedback, setFeedback] = useState('');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  const handleDarkModeChange = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedback('');
  };

  // Colors
  const bgColor = isDarkMode ? '#121212' : '#ffffff';
  const cardColor = isDarkMode ? '#1e1e1e' : '#fff';
  const textColor = isDarkMode ? '#e0e0e0' : '#121212';
  const inputBorderColor = isDarkMode ? '#555' : '#ccc';
  const buttonBgColor = isDarkMode
    ? 'linear-gradient(90deg, #00ffcc, #00ccff)'
    : 'linear-gradient(90deg, #00ccff, #0066cc)';
  const buttonTextColor = isDarkMode ? '#000' : '#fff';
  const accent = '#00e5ff';

  const Sidebar = (
    <Box sx={{
      minWidth: 220,
      maxWidth: 260,
      bgcolor: cardColor,
      borderRadius: 3,
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: 2,
      height: { xs: 'auto', md: '100%' }
    }}>
      <Avatar sx={{ width: 72, height: 72, mb: 2, bgcolor: accent, color: '#000', fontWeight: 700 }}>
        {profile.name[0]}
      </Avatar>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: textColor }}>{profile.name}</Typography>
      <Typography variant="body2" sx={{ color: '#b0bec5', mb: 2 }}>{profile.email}</Typography>
      <Divider sx={{ width: '100%', mb: 2 }} />
      <List>
        {sections.map(sec => (
          <ListItem key={sec.key} disablePadding>
            <ListItemButton
              selected={selected === sec.key}
              onClick={() => setSelected(sec.key)}
              sx={{
                borderRadius: 2,
                color: selected === sec.key ? accent : textColor,
                fontWeight: selected === sec.key ? 700 : 400,
                '&.Mui-selected': { bgcolor: 'rgba(0,229,255,0.08)' }
              }}
            >
              <ListItemText primary={sec.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const renderSection = () => {
    switch (selected) {
      case 'profile':
        return (
          <Card sx={{ bgcolor: cardColor, boxShadow: 2, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: textColor }}>
                Edit Profile
              </Typography>
              <TextField
                label="Name"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                fullWidth
                InputLabelProps={{ style: { color: textColor } }}
                InputProps={{ style: { color: textColor } }}
                variant="outlined"
                size="small"
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: inputBorderColor },
                    '&:hover fieldset': { borderColor: accent },
                    '&.Mui-focused fieldset': { borderColor: accent },
                  }
                }}
              />
              <TextField
                label="Email"
                name="email"
                value={profile.email}
                fullWidth
                disabled
                InputLabelProps={{ style: { color: textColor } }}
                InputProps={{ style: { color: textColor, opacity: 0.7 } }}
                variant="outlined"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: inputBorderColor },
                  }
                }}
              />
            </CardContent>
          </Card>
        );
      case 'apikey':
        return (
          <Card sx={{ bgcolor: cardColor, boxShadow: 2, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: textColor }}>
                API Key
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  value={apiKey}
                  fullWidth
                  disabled
                  variant="outlined"
                  size="small"
                  sx={{
                    input: { fontFamily: 'monospace', color: textColor, bgcolor: cardColor },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: inputBorderColor },
                    }
                  }}
                />
                <Button
                  onClick={handleCopyApiKey}
                  variant="contained"
                  sx={{
                    minWidth: 80,
                    bgcolor: accent,
                    color: '#000',
                    fontWeight: 700,
                    borderRadius: 2,
                    '&:hover': { bgcolor: '#00b8d9' }
                  }}>
                  Copy
                </Button>
              </Stack>
            </CardContent>
          </Card>
        );
      case 'feedback':
        return (
          <Card sx={{ bgcolor: cardColor, boxShadow: 2, borderRadius: 3 }}>
            <CardContent component="form" onSubmit={handleFeedbackSubmit}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: textColor }}>
                Provide Feedback
              </Typography>
              <TextField
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                placeholder="Your feedback..."
                multiline
                minRows={2}
                fullWidth
                variant="outlined"
                size="small"
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: inputBorderColor },
                    '&:hover fieldset': { borderColor: accent },
                    '&.Mui-focused fieldset': { borderColor: accent },
                  }
                }}
                InputLabelProps={{ style: { color: textColor } }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: accent,
                  color: '#000',
                  fontWeight: 700,
                  borderRadius: 2,
                  '&:hover': { bgcolor: '#00b8d9' }
                }}>
                Submit
              </Button>
            </CardContent>
          </Card>
        );
      case 'appearance':
        return (
          <Card sx={{ bgcolor: cardColor, boxShadow: 2, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: textColor }}>
                Appearance
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={isDarkMode}
                    onChange={handleDarkModeChange}
                    sx={{
                      '& .MuiSwitch-thumb': { bgcolor: accent },
                      '& .MuiSwitch-track': { bgcolor: '#0088cc' }
                    }}
                  />
                }
                label={<span style={{ color: textColor }}>Dark Mode</span>}
              />
            </CardContent>
          </Card>
        );
      case 'language':
        return (
          <Card sx={{ bgcolor: cardColor, boxShadow: 2, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: textColor }}>
                Language
              </Typography>
              <FormControl fullWidth variant="outlined" size="small" sx={{
                '& .MuiOutlinedInput-notchedOutline': { borderColor: inputBorderColor },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: accent },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: accent },
                color: textColor,
              }}>
                <InputLabel sx={{ color: textColor }}>App Language</InputLabel>
                <Select
                  value={language}
                  label="App Language"
                  onChange={e => setLanguage(e.target.value)}
                  sx={{ color: textColor }}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="de">German</MenuItem>
                  <MenuItem value="zh">Chinese</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        );
      case 'terms':
        return (
          <Card sx={{ bgcolor: cardColor, boxShadow: 2, borderRadius: 3 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: textColor }}>
                Terms & Privacy
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button href="#" target="_blank" sx={{ color: accent, textTransform: 'none' }}>Terms & Conditions</Button>
                <Button href="#" target="_blank" sx={{ color: accent, textTransform: 'none' }}>Privacy Policy</Button>
              </Stack>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      minHeight: '100vh',
      bgcolor: bgColor,
      color: textColor,
      p: { xs: 1, sm: 4 },
      fontFamily: 'Roboto, sans-serif'
    }}>
      <Box sx={{
        width: { xs: '100%', md: 280 },
        mr: { md: 4 },
        mb: { xs: 3, md: 0 },
        alignSelf: { xs: 'center', md: 'flex-start' }
      }}>
        {/* Optional Dark Mode Toggle */}
        <Box sx={{ mb: 2, display: { xs: 'block', md: 'none' } }}>
          <FormControlLabel
            control={<Switch checked={isDarkMode} onChange={handleDarkModeChange} />}
            label={<span style={{ color: textColor }}>Dark Mode</span>}
          />
        </Box>
        {Sidebar}
      </Box>
      <Box sx={{ flex: 1, maxWidth: 600, mx: 'auto', width: '100%' }}>
        {renderSection()}
      </Box>
    </Box>
  );
}
