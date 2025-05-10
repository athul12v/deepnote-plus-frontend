import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Box,
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from '@mui/system';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Clock } from 'lucide-react';
import Footer from './Footer'; // Import Footer

dayjs.extend(relativeTime);

const Container = styled(Box)(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: '#121212', // Dark background
  padding: '2rem',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")', // Subtle pattern
    backgroundSize: 'cover',
    opacity: 0.1,
    pointerEvents: 'none',
  },
}));

const HistoryItem = styled(ListItem)(() => ({
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
}));

const HistoryTitle = styled(Typography)(() => ({
  fontWeight: '600',
  color: '#00ffcc',
}));

const HistoryDescription = styled(Typography)(() => ({
  color: '#ddd',
  fontSize: '0.9rem',
}));

const HistoryTimestamp = styled(Typography)(() => ({
  color: '#888',
  fontSize: '0.8rem',
}));

const ErrorText = styled(Typography)(() => ({
  color: '#ff6e40',
  fontSize: '1rem',
  marginTop: '1rem',
  textAlign: 'center',
  fontFamily: 'Roboto, sans-serif',
}));

function History() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/"); // Redirect to login if not authenticated
    }
  }, [navigate, user]);

  useEffect(() => {
    const fetchNotes = async () => {
      if (user) {
        try {
          const token = await user.getIdToken();
          const response = await axios.get("http://localhost:5000/get-notes", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setNotes(response.data.notes);
          setError("");
        } catch (error) {
          setError("Failed to fetch history.");
          console.error("Fetch history error:", error);
        }
      }
    };

    fetchNotes();
  }, [user]);

  if (!user) {
    return <Typography variant="body1" color="error" sx={{ mt: 2, textAlign: 'center' }}>Please log in to view history.</Typography>;
  }

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', maxWidth: 800 }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#00ffcc', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>
          Recording History
        </Typography>
        {notes.length > 0 ? (
          <List>
            {notes.map((note) => (
              <React.Fragment key={note.id}>
                <HistoryItem alignItems="flex-start">
                  <ListItemText
                    primary={<HistoryTitle>{note.title}</HistoryTitle>}
                    secondary={
                      <React.Fragment>
                        <HistoryDescription>{note.description}</HistoryDescription>
                        <HistoryTimestamp>
                          <Clock size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                          {dayjs(note.timestamp).fromNow()} ({dayjs(note.timestamp).format('YYYY-MM-DD HH:mm')})
                        </HistoryTimestamp>
                      </React.Fragment>
                    }
                  />
                  <Button component={Link} to={`/note/${note.id}`} variant="outlined" color="primary" sx={{ ml: 2 }}>
                    View
                  </Button>
                </HistoryItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        ) : (
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2, textAlign: 'center' }}>
            No recording history available yet.
          </Typography>
        )}
        {error && <ErrorText>{error}</ErrorText>}
      </motion.div>
      <Footer />
    </Container>
  );
}

export default History;