// src/components/AudioRecordingButton.js
import React from "react";
import { Fab } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import { motion } from "framer-motion";

function AudioRecordingButton({ isRecording, startRecording, stopRecording }) {
  return (
    <motion.div
      className="audio-recording-button"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Fab
        color={isRecording ? "secondary" : "primary"}
        onClick={isRecording ? stopRecording : startRecording}
        sx={{ boxShadow: 6, position: "absolute", bottom: "20%", right: "20%" }}
      >
        {isRecording ? <StopIcon /> : <MicIcon />}
      </Fab>
    </motion.div>
  );
}

export default AudioRecordingButton;
