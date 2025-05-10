// // src/components/Login.js
// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";  // Import your Firebase configuration
// import { useNavigate } from "react-router-dom";
// import { TextField, Button, Typography, Container, Box } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from '@mui/system';

// // Styled Components
// const LoginContainer = styled(Box)(() => ({
//   background: 'linear-gradient(135deg, #0d0d0d, #1a1a2e)',
//   color: '#00ffcc',
//   borderRadius: '16px',
//   padding: '3rem',
//   boxShadow: '0 6px 20px rgba(0, 0, 0, 0.8)',
// }));

// const ErrorText = styled(Typography)(() => ({
//   color: '#ff6e40',
//   marginBottom: '1rem',
//   textAlign: 'center',
//   fontWeight: '600',
// }));

// const StyledTextField = styled(TextField)({
//   '& .MuiInputBase-root': {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)', // Lighter background for better visibility
//     borderRadius: '8px',
//     color: '#fff', // Text color
//   },
//   '& label': {
//     color: '#fff', // Label color
//   },
//   '& label.Mui-focused': {
//     color: '#00ffcc', // Focused label color
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'rgba(255, 255, 255, 0.5)', // Border color
//     },
//     '&:hover fieldset': {
//       borderColor: '#00ffcc', // Border color on hover
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#00ffcc', // Border color when focused
//     },
//   },
// });

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Handle user login
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Reset error on each submission attempt
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate("/home"); // Redirect to the Home page after successful login
//     } catch (err) {
//       setError("Invalid credentials. Please try again.");
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <motion.div
//         className="login-form"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <LoginContainer>
//           <Typography variant="h5" sx={{ marginBottom: 2, textAlign: "center", color: '#fff' }}>
//             Login to Your Account
//           </Typography>

//           {error && <ErrorText>{error}</ErrorText>}

//           <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//             <StyledTextField
//               label="Email Address"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <StyledTextField
//               label="Password"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <Button
//               type="submit"
//               variant="contained"
//               fullWidth
//               color="primary"
//               sx={{ marginTop: 2, background: 'linear-gradient(45deg, #00ffcc, #00ccff)', '&:hover': { background: 'linear-gradient(45deg, #00ccff, #00ffcc)' } }}
//             >
//               Login
//             </Button>
//           </form>

//           <Box sx={{ marginTop: 2, textAlign: "center" }}>
//             <Typography variant="body2" color="textSecondary">
//               Don't have an account?{" "}
//               <Button
//                 variant="text"
//                 color="primary"
//                 onClick={() => navigate("/register")}
//               >
//                 Register Here
//               </Button>
//             </Typography>
//           </Box>
//         </LoginContainer>
//       </motion.div>
//     </Container>
//   );
// }

// export default Login;

// src/components/Login.js
import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from "../firebase"; // Your firebase config
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Container, Box, Divider } from "@mui/material";
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

const LoginContainer = styled(Box)(() => ({
  background: "rgba(255, 255, 255, 0.1)", // Semi-transparent for glass effect
  backdropFilter: "blur(10px)", // Glassy effect
  color: "#00ffcc",
  borderRadius: "16px",
  padding: "3rem",
  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.8)",
  maxWidth: 400,
  width: "90vw",
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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch {
      setError("Invalid credentials. Please try again.");
    }
  };

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
        <LoginContainer>
        <Typography variant="h5" sx={{ mb: 3, textAlign: "center", color: '#fff', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)' }}>
  Login to Your Account
</Typography>


          {error && <ErrorText>{error}</ErrorText>}

          <GoogleButton fullWidth onClick={handleGoogleLogin} startIcon={<FcGoogle size={24} />}>
            Sign in with Google
          </GoogleButton>

          <GitHubButton fullWidth onClick={handleGitHubLogin} startIcon={<FaGithub size={24} />}>
            Sign in with GitHub
          </GitHubButton>

          <Divider sx={{ my: 3, color: "#555" }}>OR</Divider>

          <form onSubmit={handleEmailLogin}>
            <StyledTextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              Login
            </Button>
          </form>

          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2" color="textSecondary">
              Don't have an account?{" "}
              <Button variant="text" color="primary" onClick={() => navigate("/register")}>
                Register Here
              </Button>
            </Typography>
          </Box>
        </LoginContainer>
      </motion.div>
    </BackgroundContainer>
  );
}

export default Login;
