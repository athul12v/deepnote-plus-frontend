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
  Avatar,
  Divider,
  ListItemIcon,
  Badge,
} from '@mui/material';
import { getAuth } from 'firebase/auth';
import { styled } from '@mui/system';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Login from '@mui/icons-material/Login';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Notes from '@mui/icons-material/Notes';
import Dashboard from '@mui/icons-material/Dashboard';
import Home from '@mui/icons-material/Home';
import { motion } from 'framer-motion';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(90deg, rgba(10,10,20,0.9) 0%, rgba(15,25,40,0.95) 100%)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
}));

const BrandText = styled(Typography)(({ theme }) => ({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 700,
  letterSpacing: '1px',
  background: 'linear-gradient(90deg, #00e5ff, #00b8d9)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const NavIconButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#00e5ff',
    transform: 'scale(1.1)',
    backgroundColor: 'rgba(0, 229, 255, 0.1)',
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#121212',
    color: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    minWidth: '200px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: '0.9rem',
  padding: '12px 16px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 229, 255, 0.1)',
  },
  '& .MuiSvgIcon-root': {
    color: '#00e5ff',
    marginRight: '12px',
  },
}));

function NavigationBar() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
        width: 280,
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
        height: '100%',
        color: '#fff',
        padding: '20px 0',
      }}
      role="presentation"
    >
      <Box sx={{ padding: '0 20px', marginBottom: '20px' }}>
        <BrandText variant="h6" component={Link} to="/" sx={{ textDecoration: 'none' }}>
          DeepNote Plus
        </BrandText>
      </Box>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

      {user ? (
        <Box sx={{ padding: '20px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: '#00e5ff',
                    border: '2px solid #121212',
                  }}
                />
              }
            >
              <Avatar
                sx={{
                  width: 56,
                  height: 56,
                  marginRight: '12px',
                  backgroundColor: 'rgba(0, 229, 255, 0.1)',
                }}
              >
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
              </Avatar>
            </Badge>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {user.displayName || 'User'}
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                {user.email}
              </Typography>
            </Box>
          </Box>

          <StyledMenuItem component={Link} to="/dashboard" onClick={toggleDrawer(false)}>
            <Dashboard fontSize="small" />
            Dashboard
          </StyledMenuItem>
          <StyledMenuItem component={Link} to="/notes" onClick={toggleDrawer(false)}>
            <Notes fontSize="small" />
            My Notes
          </StyledMenuItem>
          <StyledMenuItem component={Link} to="/settings" onClick={toggleDrawer(false)}>
            <Settings fontSize="small" />
            Settings
          </StyledMenuItem>
          <StyledMenuItem onClick={handleLogout}>
            <Logout fontSize="small" />
            Logout
          </StyledMenuItem>
        </Box>
      ) : (
        <Box sx={{ padding: '20px' }}>
          <StyledMenuItem component={Link} to="/" onClick={toggleDrawer(false)}>
            <Home fontSize="small" />
            Home
          </StyledMenuItem>
          <StyledMenuItem component={Link} to="/login" onClick={toggleDrawer(false)}>
            <Login fontSize="small" />
            Login
          </StyledMenuItem>
          <StyledMenuItem component={Link} to="/register" onClick={toggleDrawer(false)}>
            <PersonAdd fontSize="small" />
            Register
          </StyledMenuItem>
        </Box>
      )}
    </Box>
  );

  return (
    <StyledAppBar
      position="fixed"
      sx={{
        background: scrolled
          ? 'linear-gradient(90deg, rgba(10,10,20,0.98) 0%, rgba(15,25,40,0.98) 100%)'
          : 'linear-gradient(90deg, rgba(10,10,20,0.8) 0%, rgba(15,25,40,0.85) 100%)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 24px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Mobile Menu Button */}
          <NavIconButton
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' }, marginRight: '12px' }}
            aria-label="open drawer"
          >
            <MenuIcon />
          </NavIconButton>

          {/* Brand Logo/Name */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <BrandText variant="h6" component={Link} to="/" sx={{ textDecoration: 'none' }}>
              DeepNote Plus
            </BrandText>
          </motion.div>
        </Box>

        {/* Desktop Profile Menu */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <NavIconButton
            edge="end"
            onClick={handleMenuClick}
            aria-label="account menu"
            aria-controls="profile-menu"
            aria-haspopup="true"
          >
            {user ? (
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  backgroundColor: 'rgba(0, 229, 255, 0.1)',
                }}
              >
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
              </Avatar>
            ) : (
              <AccountCircle sx={{ fontSize: '32px' }} />
            )}
          </NavIconButton>

          <StyledMenu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {user ? (
              <>
                <Box sx={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {user.displayName || 'User'}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    {user.email}
                  </Typography>
                </Box>
                <StyledMenuItem component={Link} to="/dashboard" onClick={handleMenuClose}>
                  <Dashboard fontSize="small" />
                  Dashboard
                </StyledMenuItem>
                <StyledMenuItem component={Link} to="/notes" onClick={handleMenuClose}>
                  <Notes fontSize="small" />
                  My Notes
                </StyledMenuItem>
                <StyledMenuItem component={Link} to="/settings" onClick={handleMenuClose}>
                  <Settings fontSize="small" />
                  Settings
                </StyledMenuItem>
                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                <StyledMenuItem onClick={handleLogout}>
                  <Logout fontSize="small" />
                  Logout
                </StyledMenuItem>
              </>
            ) : (
              <>
                <StyledMenuItem component={Link} to="/login" onClick={handleMenuClose}>
                  <Login fontSize="small" />
                  Login
                </StyledMenuItem>
                <StyledMenuItem component={Link} to="/register" onClick={handleMenuClose}>
                  <PersonAdd fontSize="small" />
                  Register
                </StyledMenuItem>
              </>
            )}
          </StyledMenu>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)',
          },
        }}
      >
        {drawerList}
      </Drawer>
    </StyledAppBar>
  );
}

export default NavigationBar;