import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from '@mui/system';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
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

const ErrorText = styled(Typography)(() => ({
  color: '#ff6e40',
  fontSize: '1rem',
  marginTop: '1rem',
  textAlign: 'center',
  fontFamily: 'Roboto, sans-serif',
}));

function NoteDetail() {
  const [note, setNote] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [availableLanguages] = useState({
    'en-US': 'English (US)',
    'es-ES': 'Spanish (Spain)',
    'fr-FR': 'French (France)',
    'de-DE': 'German (Germany)',
    'hi-IN': 'Hindi (India)',
    // Add more languages as needed
  });
  const [availableTranslationLanguages] = useState({
    '': 'No Translation',
    'es': 'Spanish',
    'fr': 'French',
    'de': 'German',
    'hi': 'Hindi',
    // Add more translation languages
  });

  useEffect(() => {
    if (!user) {
      navigate("/"); // Redirect to login if not authenticated
    }
  }, [navigate, user]);

  useEffect(() => {
    const fetchNote = async () => {
      if (user && id) {
        try {
          const token = await user.getIdToken();
          const response = await axios.get(`http://localhost:5000/get-note/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setNote(response.data.note);
          setError("");
        } catch (error) {
          setError("Failed to fetch note details.");
          console.error("Fetch note error:", error);
        }
      }
    };

    fetchNote();
  }, [user, id]);

  if (!user) {
    return <Typography variant="body1" color="error" sx={{ mt: 2, textAlign: 'center' }}>Please log in to view note details.</Typography>;
  }

  if (!note) {
    return <CircularProgress />;
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
          {note.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ color: '#ddd', textAlign: 'center' }}>
          {note.description}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom sx={{ color: '#888', textAlign: 'center' }}>
          Created {dayjs(note.timestamp).format('YYYY-MM-DD HH:mm')} ({dayjs(note.timestamp).fromNow()})
        </Typography>

        <Typography variant="h6" sx={{ color: '#00ffcc', mt: 3 }}>
          Transcription ({note.recordingLanguage ? availableLanguages[note.recordingLanguage]?.split(' ')[0] : 'Unknown'})
        </Typography>
        <Typography variant="body1" sx={{ color: '#eee', whiteSpace: 'pre-wrap', mt: 1 }}>
          {note.transcription}
        </Typography>

        {note.translatedTranscription && (
          <>
            <Typography variant="h6" sx={{ color: '#00ffcc', mt: 3 }}>
              Translated Transcription ({note.translationLanguage ? availableTranslationLanguages[note.translationLanguage] : 'No Translation'})
            </Typography>
            <Typography variant="body1" sx={{ color: '#eee', whiteSpace: 'pre-wrap', mt: 1 }}>
              {note.translatedTranscription}
            </Typography>
          </>
        )}

        {note.summary && (
          <>
            <Typography variant="h6" sx={{ color: '#00ffcc', mt: 3 }}>
              Summary
            </Typography>
            <Typography variant="body1" sx={{ color: '#eee', whiteSpace: 'pre-wrap', mt: 1 }}>
              {note.summary}
            </Typography>
          </>
        )}

        {error && <ErrorText>{error}</ErrorText>}
        <Button component={Link} to="/history" variant="outlined" color="primary" sx={{ mt: 3 }}>
          Back to History
        </Button>
      </motion.div>
      <Footer />
    </Container>
  );
}

export default NoteDetail;