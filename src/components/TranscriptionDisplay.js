// src/components/TranscriptionDisplay.js
import React from "react";
import { Card, Typography, Button, Box, CircularProgress } from "@mui/material";

function TranscriptionDisplay({ transcription, summary, isRecording, handleSummarize }) {
  return (
    <Box sx={{ width: "100%", marginTop: 3 }}>
      <Card sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h6">Transcription</Typography>
        {isRecording ? (
          <CircularProgress sx={{ marginTop: 2 }} />
        ) : (
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {transcription || "No transcription yet."}
          </Typography>
        )}
      </Card>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSummarize}
        disabled={!transcription}
      >
        Summarize
      </Button>

      {summary && (
        <Card sx={{ marginTop: 3, padding: 2 }}>
          <Typography variant="h6">Summary</Typography>
          <Typography variant="body2">{summary}</Typography>
        </Card>
      )}
    </Box>
  );
}

export default TranscriptionDisplay;
