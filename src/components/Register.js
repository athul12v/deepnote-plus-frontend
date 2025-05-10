import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase"; // Your Firebase config
import { db } from "../firebase"; // Import Firestore DB
import { setDoc, doc, Timestamp } from "firebase/firestore"; // Firestore functions
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

// Styled Components
const BackgroundContainer = styled(Box)(() => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(135deg, #0d0d0d, #1a1a2e)", // Full-screen gradient background
}));

const RegisterContainer = styled(Box)(() => ({
  background: "rgba(255, 255, 255, 0.1)", // Semi-transparent for glass effect
  backdropFilter: "blur(10px)", // Glassy effect
  color: "#00ffcc",
  borderRadius: "16px",
  padding: "2rem",
  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.8)",
  maxWidth: "400px",
  width: "90vw", // Responsive width
}));

const ErrorText = styled(Typography)(() => ({
  color: "#ff6e40",
  marginBottom: "1rem",
  textAlign: "center",
  fontWeight: "600",
}));

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "8px",
    color: "#fff",
  },
  "& label": {
    color: "#fff",
  },
  "& label.Mui-focused": {
    color: "#00ffcc",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.5)",
    },
    "&:hover fieldset": {
      borderColor: "#00ffcc",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00ffcc",
    },
  },
});

const OAuthButton = styled(Button)({
  textTransform: "none",
  marginBottom: "1rem",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  padding: "0.75rem",
  borderRadius: "8px",
  fontSize: "1rem",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
});

const GoogleButton = styled(OAuthButton)({
  backgroundColor: "#fff",
  color: "#000",
  "&:hover": {
    backgroundColor: "#f1f1f1",
  },
});

const GitHubButton = styled(OAuthButton)({
  backgroundColor: "#24292e",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#3b4045",
  },
});

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle user registration with email/password
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Set Firebase Auth display name
      await updateProfile(user, { displayName: name.trim() });

      // 🔥 Save user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        name: name.trim(),
        role: "free", // default role
        credits_used: 0,
        created_at: Timestamp.now(),
        pro_since: null
      });

      navigate("/home");
    } catch (err) {
      setError("Failed to create account. Please try again.");
    }
  };

  // Handle Google sign-in
  const handleGoogleLogin = async () => {
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (err) {
      setError("Google sign-in failed. Please try again.");
    }
  };

  // Handle GitHub sign-in
  const handleGitHubLogin = async () => {
    setError("");
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (err) {
      setError("GitHub sign-in failed. Please try again.");
    }
  };

  return (
    <BackgroundContainer>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <RegisterContainer>
          <Typography variant="h5" sx={{ mb: 3, textAlign: "center", color: '#fff', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)' }}>
            Create Your Account
          </Typography>

          {error && <ErrorText>{error}</ErrorText>}

          <GoogleButton fullWidth onClick={handleGoogleLogin} startIcon={<FcGoogle size={24} />}>
            Sign up with Google
          </GoogleButton>

          <GitHubButton fullWidth onClick={handleGitHubLogin} startIcon={<FaGithub size={24} />}>
            Sign up with GitHub
          </GitHubButton>

          <Divider sx={{ my: 3, color: "#555" }}>OR</Divider>

          <form onSubmit={handleSubmit}>
            <StyledTextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
              autoFocus
            />
            <StyledTextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
            <StyledTextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                background: 'linear-gradient(45deg, #00ffcc, #00ccff)',
                color: '#000',
                fontWeight: 'bold',
                '&:hover': {
                  background: 'linear-gradient(45deg, #00ccff, #00ffcc)',
                },
              }}
            >
              Register
            </Button>
          </form>

          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2" color="textSecondary">
              Already have an account?{" "}
              <Button variant="text" color="primary" onClick={() => navigate("/login")}>
                Login Here
              </Button>
            </Typography>
          </Box>
        </RegisterContainer>
      </motion.div>
    </BackgroundContainer>
  );
}

export default Register;

