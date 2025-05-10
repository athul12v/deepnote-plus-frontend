import React, { useState, useEffect, useRef } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Mic, MicOff, X, Save } from 'lucide-react';
import { styled } from '@mui/system';

// Styled Components (unchanged)
const Container = styled(Box)(() => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#121212",
  color: "#fff",
  padding: "2rem",
}));

const HeroContainer = styled(Box)(() => ({
  background: "#1e1e1e",
  borderRadius: "12px",
  padding: "2rem 3rem",
  textAlign: "center",
  maxWidth: "500px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  width: "100%",
}));

const HeaderText = styled(Typography)(() => ({
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: "1rem",
  color: "#00e676",
  fontFamily: 'Poppins, sans-serif',
}));

const SubHeaderText = styled(Typography)(() => ({
  fontSize: "1.2rem",
  color: "#ccc",
  marginBottom: "1.5rem",
  fontFamily: 'Roboto, sans-serif',
}));

const ActionContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  alignItems: "center",
  marginTop: "2rem",
}));

const RecordingButton = styled(Button)(({ isRecording }) => ({
  backgroundColor: isRecording ? "#ff3d00" : "#00e676",
  color: "#fff",
  borderRadius: "50%",
  padding: "1.5rem",
  fontSize: "1.5rem",
  transition: "all 0.3s ease",
  width: "90px",
  height: "90px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const TranscriptionContainer = styled(Box)(() => ({
  marginTop: "2rem",
  backgroundColor: "#333",
  padding: "1.5rem",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  maxWidth: "450px",
  width: "100%",
  position: "relative",
}));

const TranscriptionText = styled(Typography)(() => ({
  fontSize: "1rem",
  color: "#ddd",
  lineHeight: "1.6",
  wordBreak: "break-word",
  whiteSpace: "pre-wrap",
}));

const ClearButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "8px",
  right: "8px",
  color: "#ff6e40",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
}));

const ButtonStyled = styled(Button)(() => ({
  backgroundColor: "#00e676",
  borderRadius: "8px",
  padding: "0.8rem 2.5rem",
  fontSize: "1rem",
  fontWeight: "600",
  color: "#fff",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#00b248",
  },
}));

const SaveButton = styled(Button)(() => ({
  backgroundColor: "#2196F3", // Blue color for save action
  borderRadius: "8px",
  padding: "0.8rem 2.5rem",
  fontSize: "1rem",
  fontWeight: "600",
  color: "#fff",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#0d8bf2",
  },
}));

function Home() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const recognitionRef = useRef(null);
  const [recordingLanguage, setRecordingLanguage] = useState('en-US');

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const startRecording = () => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = recordingLanguage;

      recognitionRef.current.onstart = () => {
        setIsRecording(true);
        setError("");
        setSummary("");
      };

      recognitionRef.current.onresult = (event) => {
        let currentTranscription = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            currentTranscription += event.results[i][0].transcript + ' ';
          } else {
            currentTranscription += event.results[i][0].transcript + '... ';
          }
        }
        setTranscription(currentTranscription.trim());
      };

      recognitionRef.current.onerror = (event) => {
        setError(`Error during recording: ${event.error}`);
        setIsRecording(false);
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current.start();
    } else {
      setError("Speech recognition is not supported in this browser.");
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
  };

  const handleSummarize = async () => {
    if (!transcription) {
      setError("Please start recording first.");
      return;
    }
    setIsSummarizing(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/transcribe",
        { transcript: transcription }
      );
      setSummary(response.data.summary);
    } catch (err) {
      setError("Failed to summarize text.");
    } finally {
      setIsSummarizing(false);
    }
  };

  const saveTranscriptionToServer = async () => {
    if (!transcription) {
      setError("No transcription to save.");
      return;
    }

    setIsSaving(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/save-transcription",
        { 
          text: transcription,
          filename: `transcription_${user.uid}_${Date.now()}.txt`, // Unique filename
        }
      );
      alert(`File saved: ${response.data.path}`);
    } catch (err) {
      setError("Failed to save transcription.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleClear = () => {
    setTranscription("");
    setSummary("");
    setError("");
  };

  return (
    <Container>
      <HeroContainer>
        <HeaderText>Speech Recognition</HeaderText>
        <SubHeaderText>Record, Transcribe, and Summarize Your Voice</SubHeaderText>

        <ActionContainer>
          <RecordingButton isRecording={isRecording} onClick={isRecording ? stopRecording : startRecording}>
            {isRecording ? <MicOff size={30} /> : <Mic size={30} />}
          </RecordingButton>
        </ActionContainer>

        {transcription && (
          <TranscriptionContainer>
            <ClearButton onClick={handleClear}>
              <X size={20} />
            </ClearButton>
            <TranscriptionText>{transcription}</TranscriptionText>
          </TranscriptionContainer>
        )}

        {error && <Typography color="error">{error}</Typography>}

        <ActionContainer>
          <ButtonStyled onClick={handleSummarize} disabled={!transcription || isSummarizing}>
            {isSummarizing ? <CircularProgress size={24} color="inherit" /> : 'Summarize'}
          </ButtonStyled>
          <SaveButton onClick={saveTranscriptionToServer} disabled={!transcription || isSaving}>
            {isSaving ? <CircularProgress size={24} color="inherit" /> : 'Save as TXT'}
          </SaveButton>
        </ActionContainer>

        {summary && (
          <Box sx={{ marginTop: '2rem', textAlign: 'center' }}>
            <Typography variant="h6" color="primary">Summary:</Typography>
            <Typography variant="body1" sx={{ color: '#ddd' }}>{summary}</Typography>
          </Box>
        )}
      </HeroContainer>
    </Container>
  );
}

export default Home;