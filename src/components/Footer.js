import React from 'react';
import { Box, Typography, Container, Stack, IconButton, Link, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MemoryIcon from '@mui/icons-material/Memory'; // For AI aesthetic
import AutoStoriesIcon from '@mui/icons-material/AutoStories'; // Medium-style icon

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#121212', // Black background
        color: '#e0e0e0', // Light text for contrast
        py: 3,
        px: 2,
        mt: 'auto',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ textAlign: { xs: 'center', sm: 'left' } }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#00e5ff' }}>
              DeepNote Plus
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: '#b0bec5' }}>
            The Intelligent Edge in Learning
            </Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            <Link href="https://github.com" target="_blank" rel="noopener" color="inherit">
              <IconButton sx={{ color: '#00e5ff' }}>
                <GitHubIcon />
              </IconButton>
            </Link>
            <Link href="https://x.com" target="_blank" rel="noopener" color="inherit">
              <IconButton sx={{ color: '#00e5ff' }}>
                <TwitterIcon />
              </IconButton>
            </Link>
            <Link href="https://medium.com" target="_blank" rel="noopener" color="inherit">
              <IconButton sx={{ color: '#00e5ff' }}>
                <AutoStoriesIcon />
              </IconButton>
            </Link>
          </Stack>
        </Stack>

        <Divider sx={{ backgroundColor: '#37474f', my: 2 }} />

        <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
          <MemoryIcon fontSize="small" sx={{ color: '#00e5ff' }} />
          <Typography variant="caption" sx={{ color: '#90a4ae' }}>
            © {new Date().getFullYear()} DeepNote Plus — All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
