import React from 'react';
import { Grid, Box, Typography, Avatar } from '@mui/material';

function TeamSection() {
  const teamMembers = [
    { name: 'John Doe', role: 'Founder', image: '/images/team1.jpg' },
    { name: 'Jane Smith', role: 'AI Specialist', image: '/images/team2.jpg' },
    { name: 'Sarah Lee', role: 'Product Manager', image: '/images/team3.jpg' },
  ];

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h2" sx={{ marginBottom: '2rem' }}>
        Meet Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{ width: 120, height: 120, margin: 'auto', marginBottom: '1rem' }}
              />
              <Typography variant="h4">{member.name}</Typography>
              <Typography variant="body1">{member.role}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TeamSection;
