import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  Box,
} from '@mui/material';
import { getAuth } from 'firebase/auth';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { styled } from '@mui/system';

function NavigationBar() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [bgColor, setBgColor] = useState('transparent'); // Start with transparent background

  // Change navbar background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      setBgColor(window.scrollY > 50 ? 'rgba(0, 0, 0, 0.75)' : 'transparent'); // Adjust based on scroll
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
    handleMenuClose();
    setDrawerOpen(false);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#121212',
        height: '100%',
        color: '#fff',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ padding: 2 }}>
        {!user ? (
          <>
            <MenuItem
              component={Link}
              to="/login"
              sx={{
                fontSize: '0.875rem',
                padding: '8px 16px',
                color: '#00e5ff',
                '&:hover': { backgroundColor: '#333' },
              }}
            >
              <LoginIcon sx={{ marginRight: 1 }} />
              Login
            </MenuItem>
            <MenuItem
              component={Link}
              to="/register"
              sx={{
                fontSize: '0.875rem',
                padding: '8px 16px',
                color: '#00e5ff',
                '&:hover': { backgroundColor: '#333' },
              }}
            >
              <PersonAddIcon sx={{ marginRight: 1 }} />
              Register
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              component={Link}
              to="/settings"
              sx={{
                fontSize: '0.875rem',
                padding: '8px 16px',
                color: '#00e5ff',
                '&:hover': { backgroundColor: '#333' },
              }}
            >
              <SettingsIcon sx={{ marginRight: 1 }} />
              Settings
            </MenuItem>
            <MenuItem
              onClick={handleLogout}
              sx={{
                fontSize: '0.875rem',
                padding: '8px 16px',
                color: '#00e5ff',
                '&:hover': { backgroundColor: '#333' },
              }}
            >
              <LogoutIcon sx={{ marginRight: 1 }} />
              Logout
            </MenuItem>
          </>
        )}
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: bgColor, // Background color depends on scroll position
        color: '#fff',
        boxShadow: 'none',
        transition: 'background-color 0.3s ease',
        backdropFilter: 'blur(8px)', // Add slight blur effect when scrolling
        padding: '0 16px',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand Logo / Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: '600',
            letterSpacing: '1px',
            fontFamily: 'Poppins, sans-serif',
            userSelect: 'none',
            color: '#00e5ff',
            transition: 'color 0.3s ease',
            '&:hover': { color: '#fff' },
          }}
        >
          Deepnote
        </Typography>

        {/* Hamburger Menu (Mobile) */}
        <IconButton
          edge="end"
          onClick={toggleDrawer(true)}
          sx={{
            display: { xs: 'block', md: 'none' },
            color: '#fff',
            transition: 'color 0.3s ease',
            '&:hover': { color: '#00e5ff' },
          }}
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>

        {/* Profile Icon (Desktop) */}
        <IconButton
          edge="end"
          onClick={handleMenuClick}
          sx={{
            display: { xs: 'none', md: 'block' },
            color: '#fff',
            transition: 'color 0.3s ease',
            '&:hover': { color: '#00e5ff' },
          }}
          aria-label="account menu"
        >
          <AccountCircle />
        </IconButton>

        {/* Profile Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              backgroundColor: '#121212',
              color: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              mt: 1.5,
              minWidth: 150,
            },
          }}
        >
          {!user ? (
            <>
              <MenuItem
                component={Link}
                to="/login"
                onClick={handleMenuClose}
                sx={{
                  fontSize: '0.875rem',
                  color: '#00e5ff',
                  '&:hover': { backgroundColor: '#333' },
                }}
              >
                <LoginIcon sx={{ marginRight: 1 }} />
                Login
              </MenuItem>
              <MenuItem
                component={Link}
                to="/register"
                onClick={handleMenuClose}
                sx={{
                  fontSize: '0.875rem',
                  color: '#00e5ff',
                  '&:hover': { backgroundColor: '#333' },
                }}
              >
                <PersonAddIcon sx={{ marginRight: 1 }} />
                Register
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                component={Link}
                to="/settings"
                onClick={handleMenuClose}
                sx={{
                  fontSize: '0.875rem',
                  color: '#00e5ff',
                  '&:hover': { backgroundColor: '#333' },
                }}
              >
                <SettingsIcon sx={{ marginRight: 1 }} />
                Settings
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                sx={{
                  fontSize: '0.875rem',
                  color: '#00e5ff',
                  '&:hover': { backgroundColor: '#333' },
                }}
              >
                <LogoutIcon sx={{ marginRight: 1 }} />
                Logout
              </MenuItem>
            </>
          )}
        </Menu>
      </Toolbar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </AppBar>
  );
}

export default NavigationBar;