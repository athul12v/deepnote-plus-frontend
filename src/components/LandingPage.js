import React from "react";
import { Box, Typography, Button, Grid, Stack, useTheme, Container } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import { Apple, Android, ArrowRightAlt, PlayArrow, Download } from "@mui/icons-material";
import { Mic, Summarize, SyncAlt, Devices, Code, Quiz, Psychology, AutoStories, Speed } from "@mui/icons-material";
import TranscriptSummaryQuiz from "./TranscriptSummaryQuiz";

// Styled components
const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "#0a0a0a",
});

const HeroSection = styled(Box)(({ theme }) => ({
  background: "linear-gradient(135deg, #020c1b 0%, #1a2a4a 100%)",
  color: "#fff",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 70% 30%, rgba(0,255,204,0.1) 0%, transparent 60%)",
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  maxWidth: "1400px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  gap: theme.spacing(6),
  padding: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    textAlign: "center",
  },
}));

const HeroText = styled(Box)(({ theme }) => ({
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "4.5rem",
  fontWeight: 800,
  marginBottom: theme.spacing(2),
  lineHeight: 1.2,
  background: "linear-gradient(90deg, #00ffcc, #00ccff)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 400,
  marginBottom: theme.spacing(4),
  color: "rgba(255,255,255,0.8)",
  lineHeight: 1.6,
  maxWidth: "600px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(90deg, #00ffcc, #00ccff)",
  color: "#000",
  borderRadius: "50px",
  padding: theme.spacing(2, 4),
  fontSize: "1.1rem",
  fontWeight: 700,
  textTransform: "none",
  boxShadow: "0 4px 20px rgba(0, 255, 204, 0.3)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 6px 25px rgba(0, 255, 204, 0.4)",
  },
}));

const AppButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0.1)",
  color: "#fff",
  borderRadius: "12px",
  padding: theme.spacing(1.5, 3),
  fontSize: "1rem",
  fontWeight: 500,
  textTransform: "none",
  border: "1px solid rgba(255,255,255,0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
}));

const FeatureSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  background: "#0f0f0f",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 30% 70%, rgba(0,255,204,0.05) 0%, transparent 70%)",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 700,
  marginBottom: theme.spacing(6),
  textAlign: "center",
  background: "linear-gradient(90deg, #fff, #aaa)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  background: "linear-gradient(145deg, #151515, #1a1a1a)",
  borderRadius: "16px",
  padding: theme.spacing(4),
  height: "100%",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  transition: "all 0.4s ease",
  border: "1px solid rgba(255,255,255,0.05)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(45deg, rgba(0,255,204,0.05), transparent)",
    opacity: 0,
    transition: "opacity 0.4s ease",
  },
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
    "&::before": {
      opacity: 1,
    },
  },
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(3),
  background: "linear-gradient(135deg, rgba(0,255,204,0.1), rgba(0,204,255,0.1))",
  color: "#00ffcc",
  fontSize: "2.5rem",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    background: "linear-gradient(135deg, rgba(0,255,204,0.2), rgba(0,204,255,0.2))",
  },
}));

const DemoSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  background: "linear-gradient(180deg, #0f0f0f 0%, #1a1a2e 100%)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 70% 30%, rgba(0,255,204,0.05) 0%, transparent 70%)",
  },
}));

const DemoCard = styled(Box)(({ theme }) => ({
  background: "rgba(255,255,255,0.03)",
  borderRadius: "20px",
  padding: theme.spacing(4),
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.05)",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(45deg, rgba(0,255,204,0.05), transparent)",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    borderColor: "rgba(0,255,204,0.3)",
    "&::before": {
      opacity: 1,
    },
  },
}));

const DemoStep = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: theme.spacing(4),
  "&:last-child": {
    marginBottom: 0,
  },
}));

const StepNumber = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #00ffcc, #00ccff)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  fontWeight: 700,
  marginRight: theme.spacing(2),
  flexShrink: 0,
}));

const StepContent = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const StatsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  background: "linear-gradient(90deg, #020c1b 0%, #1a2a4a 100%)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "radial-gradient(circle at 30% 70%, rgba(0,255,204,0.05) 0%, transparent 70%)",
  },
}));

const StatCard = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(4),
  background: "rgba(255,255,255,0.03)",
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.05)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    borderColor: "rgba(0,255,204,0.3)",
  },
}));

function LandingPage() {
  const theme = useTheme();

  const features = [
    {
      icon: <Mic fontSize="large" />,
      title: "Smart Lecture Recording",
      description: "Record your lectures with crystal-clear audio quality and automatic noise reduction. Never miss a word from your professors."
    },
    {
      icon: <Summarize fontSize="large" />,
      title: "AI-Powered Summaries",
      description: "Get concise summaries of your lectures with key points and important concepts highlighted. Perfect for quick revision."
    },
    {
      icon: <Quiz fontSize="large" />,
      title: "Auto Quiz Generation",
      description: "Generate practice quizzes from your lecture content to test your understanding. Great for exam preparation."
    },
    {
      icon: <Psychology fontSize="large" />,
      title: "Smart Learning",
      description: "AI-powered insights help you understand complex topics and identify knowledge gaps in your studies."
    },
    {
      icon: <AutoStories fontSize="large" />,
      title: "Study Notes",
      description: "Automatically organize your lecture content into well-structured study notes with key concepts and examples."
    },
    {
      icon: <Speed fontSize="large" />,
      title: "Quick Review",
      description: "Access summarized content and key points for quick revision before exams or assignments."
    }
  ];

  const demoSteps = [
    {
      number: 1,
      title: "Record Your Lecture",
      description: "Start recording with one tap. Our AI automatically filters background noise for crystal-clear audio."
    },
    {
      number: 2,
      title: "Get Instant Transcription",
      description: "Watch as your lecture is transcribed in real-time with high accuracy."
    },
    {
      number: 3,
      title: "Review AI Summary",
      description: "Get a concise summary with key points and important concepts highlighted."
    },
    {
      number: 4,
      title: "Practice with Quizzes",
      description: "Test your understanding with AI-generated quizzes based on the lecture content."
    }
  ];

  const stats = [
    { number: "98%", label: "Accuracy Rate" },
    { number: "50K+", label: "Active Students" },
    { number: "1M+", label: "Minutes Transcribed" },
    { number: "24/7", label: "AI Support" }
  ];

  // // Example backend response (from your message)
  // const response = {
  //   summary: "Here's a summary of the text: ...",
  //   quiz: `{
  //     "questions": [
  //       {
  //         "question": "What year was C programming language created?",
  //         "options": ["1962", "1972", "1982", "1992"],
  //         "answer": "1972"
  //       },
  //       // ... more questions ...
  //     ]
  //   }`
  // };

  // const transcriptText = "Full transcript text here..."; // The actual transcript

  return (
    <MainContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroText>
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <HeroTitle variant="h1">
                Your AI Study Assistant
              </HeroTitle>
              <HeroSubtitle variant="h2">
                Record lectures, get instant transcriptions, AI-powered summaries, and auto-generated quizzes. Make learning smarter and more efficient.
              </HeroSubtitle>
              <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <CTAButton
                    variant="contained"
                    endIcon={<ArrowRightAlt />}
                    href="/register"
                  >
                    Start Learning Free
                  </CTAButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <CTAButton
                    variant="outlined"
                    startIcon={<PlayArrow />}
                    sx={{
                      background: "transparent",
                      border: "2px solid #00ffcc",
                      color: "#00ffcc",
                      "&:hover": {
                        background: "rgba(0, 255, 204, 0.1)",
                      }
                    }}
                  >
                    Watch Demo
                  </CTAButton>
                </motion.div>
              </Stack>
            </motion.div>
          </HeroText>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ zIndex: 1 }}
          >
            <Box
              component="img"
              src="/path-to-your-app-preview.png"
              alt="DeepNote Plus App Preview"
              sx={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 25px 50px -12px rgba(0, 255, 204, 0.3)",
                border: "1px solid rgba(0, 255, 204, 0.2)"
              }}
            />
          </motion.div>
        </HeroContent>
      </HeroSection>

      {/* Features Section */}
      <FeatureSection>
        <Container maxWidth="lg">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <SectionTitle variant="h2">Smart Learning Features</SectionTitle>
          </motion.div>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  variants={slideUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <FeatureCard>
                    <FeatureIcon>
                      {feature.icon}
                    </FeatureIcon>
                    <Typography variant="h5" gutterBottom sx={{ color: "#fff", fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)" }}>
                      {feature.description}
                    </Typography>
                  </FeatureCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </FeatureSection>

      {/* Demo Section */}
      <DemoSection>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h3" sx={{ color: "#fff", mb: 4, fontWeight: 700 }}>
                  See How It Works
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", mb: 4 }}>
                  Experience how our AI transforms your lecture recordings into comprehensive study materials in seconds.
                </Typography>
                {demoSteps.map((step, index) => (
                  <DemoStep key={index}>
                    <StepNumber>{step.number}</StepNumber>
                    <StepContent>
                      <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                        {step.description}
                      </Typography>
                    </StepContent>
                  </DemoStep>
                ))}
                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                  <CTAButton
                    variant="contained"
                    startIcon={<PlayArrow />}
                    href="#demo"
                  >
                    Watch Demo
                  </CTAButton>
                  <CTAButton
                    variant="outlined"
                    startIcon={<Download />}
                    sx={{
                      background: "transparent",
                      border: "2px solid #00ffcc",
                      color: "#00ffcc",
                      "&:hover": {
                        background: "rgba(0, 255, 204, 0.1)",
                      }
                    }}
                  >
                    Download App
                  </CTAButton>
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <DemoCard>
                  <Box
                    component="img"
                    src="/path-to-your-demo-preview.png"
                    alt="DeepNote Plus Demo"
                    sx={{
                      width: "100%",
                      borderRadius: "12px",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    }}
                  />
                </DemoCard>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </DemoSection>

      {/* Stats Section */}
      <StatsSection>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <StatCard>
                    <Typography variant="h3" sx={{ color: "#00ffcc", fontWeight: 700, mb: 1 }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)" }}>
                      {stat.label}
                    </Typography>
                  </StatCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StatsSection>

      {/* Transcript Summary Quiz */}
      <TranscriptSummaryQuiz
        backendResponse={response}
        transcriptText={transcriptText}
      />
    </MainContainer>
  );
}

export default LandingPage;