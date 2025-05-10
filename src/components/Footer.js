import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const socialLinks = [
  {
    icon: <GitHubIcon fontSize="inherit" />,
    label: "GitHub",
    url: "https://github.com/your-github", // <-- Replace with your link
  },
  {
    icon: <MenuBookIcon fontSize="inherit" />,
    label: "Medium",
    url: "https://medium.com/@your-medium", // <-- Replace with your link
  },
  {
    icon: <TwitterIcon fontSize="inherit" />,
    label: "X",
    url: "https://x.com/your-x", // <-- Replace with your link
  },
  {
    icon: <YouTubeIcon fontSize="inherit" />,
    label: "YouTube",
    url: "https://youtube.com/your-youtube", // <-- Replace with your link
  },
];

const Footer = () => (
  <Box
    component="footer"
    sx={{
      width: "100%",
      bgcolor: "#10131a",
      color: "#00e5ff",
      py: 2,
      px: 2,
      mt: "auto",
      borderTop: "1px solid rgba(0,229,255,0.08)",
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "1rem",
      gap: 1,
    }}
  >
    <Typography variant="body2" sx={{ color: "#00e5ff", fontWeight: 500 }}>
      © {new Date().getFullYear()} DeepNote Plus
    </Typography>
    <Stack direction="row" spacing={1}>
      {socialLinks.map((item) => (
        <IconButton
          key={item.label}
          aria-label={item.label}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#00e5ff", fontSize: 22 }}
        >
          {item.icon}
        </IconButton>
      ))}
    </Stack>
  </Box>
);

export default Footer; 