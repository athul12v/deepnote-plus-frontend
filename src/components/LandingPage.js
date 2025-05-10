// import React from "react";
// import { Box, Typography, Button, Grid, Stack } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from "@mui/system";
// import { Apple, Android } from "@mui/icons-material";
// import { User, Code } from "lucide-react";

// // Import Footer Component
// import Footer from "./Footer";

// // Styled components for a stunning and modern layout
// const HeroSection = styled(Box)({
//   background: "linear-gradient(135deg, #020c1b, #2f4f76)",
//   color: "#fff",
//   height: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   textAlign: "center",
//   padding: "4rem 2rem",
//   position: "relative",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   transition: "background 1s ease",
// });

// const HeroTitle = styled(Typography)({
//   fontSize: "4.8rem",
//   fontWeight: "900",
//   marginBottom: "1rem",
//   letterSpacing: "1px",
//   textShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
//   "@media (max-width:600px)": {
//     fontSize: "3.5rem",
//   },
// });

// const HeroSubTitle = styled(Typography)({
//   fontSize: "1.6rem",
//   fontWeight: "400",
//   maxWidth: "600px",
//   marginBottom: "2rem",
//   lineHeight: "1.8",
//   color: "#bbb",
//   "@media (max-width:600px)": {
//     fontSize: "1.3rem",
//   },
// });

// const ButtonStyled = styled(Button)({
//   background: "#00ffcc",
//   borderRadius: "30px",
//   padding: "1rem 3rem",
//   fontSize: "1.4rem",
//   fontWeight: "600",
//   color: "#fff",
//   transition: "all 0.4s ease",
//   boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
//   "&:hover": {
//     background: "#00cc99",
//     transform: "scale(1.08)",
//     boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.4)",
//   },
//   "&:active": {
//     transform: "scale(1)",
//     background: "#00cc99",
//   },
// });

// const AppButtonContainer = styled(Stack)({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   marginTop: "2rem",
//   gap: "2rem",
// });

// const AppStoreButton = styled(Button)({
//   backgroundColor: "#333",
//   color: "#fff",
//   padding: "0.8rem 2rem",
//   fontSize: "1.1rem",
//   borderRadius: "8px",
//   display: "flex",
//   alignItems: "center",
//   transition: "background 0.3s ease",
//   "&:hover": {
//     backgroundColor: "#555",
//   },
// });

// const GooglePlayButton = styled(AppStoreButton)({
//   backgroundColor: "#34b7f1",
// });

// const FeatureSection = styled(Box)({
//   padding: "6rem 2rem",
//   backgroundColor: "#101010",
//   color: "#fff",
//   textAlign: "center",
//   position: "relative",
//   zIndex: 2,
//   boxShadow: "0px -10px 60px rgba(0, 0, 0, 0.2)",
// });

// const FeatureTitle = styled(Typography)({
//   fontSize: "2.8rem",
//   fontWeight: "600",
//   marginBottom: "3rem",
//   textShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)",
// });

// const FeatureItem = styled(Box)({
//   backgroundColor: "rgba(255, 255, 255, 0.1)",
//   padding: "2rem",
//   margin: "2rem 1rem",
//   borderRadius: "12px",
//   textAlign: "center",
//   boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
//   transition: "transform 0.3s ease-in-out",
//   "&:hover": {
//     transform: "scale(1.08)",
//     boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
//   },
// });

// const TeamSection = styled(Box)({
//   textAlign: "center",
//   padding: "5rem 2rem",
//   backgroundColor: "#1a1a2e",
// });

// const TeamTitle = styled(Typography)({
//   fontSize: "2.8rem",
//   fontWeight: "700",
//   color: "#fff",
//   marginBottom: "2rem",
//   textShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
// });

// const TeamMember = styled(Box)({
//   backgroundColor: "rgba(255, 255, 255, 0.1)",
//   padding: "2.5rem",
//   borderRadius: "10px",
//   textAlign: "center",
//   margin: "1rem",
//   boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.4)",
//   transition: "transform 0.3s ease-in-out",
//   "&:hover": {
//     transform: "scale(1.1)",
//   },
// });

// const MemberTitle = styled(Typography)({
//   fontSize: "1.7rem",
//   fontWeight: "600",
//   color: "#fff",
//   marginBottom: "1rem",
// });

// const MemberDescription = styled(Typography)({
//   fontSize: "1.1rem",
//   color: "#bbb",
//   lineHeight: "1.7",
// });

// function LandingPage() {
//   return (
//     <Box sx={{ minHeight: "100vh", bgcolor: "#090909" }}>
//       {/* Hero Section */}
//       <HeroSection>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//         >
//           <HeroTitle>DeepNote Plus</HeroTitle>
//           <HeroSubTitle>
//             Instantly transcribe and summarize your voice notes with AI. Stay
//             productive, wherever you are.
//           </HeroSubTitle>
//           <ButtonStyled variant="contained" href="/register" disableElevation>
//             Get Started
//           </ButtonStyled>
//           <AppButtonContainer>
//             <AppStoreButton href="https://apps.apple.com/us/app/deepnote-plus" target="_blank">
//               <Apple sx={{ marginRight: "0.5rem" }} /> App Store
//             </AppStoreButton>
//             <GooglePlayButton href="https://play.google.com/store/apps/details?id=com.deepnoteplus" target="_blank">
//               <Android sx={{ marginRight: "0.5rem" }} /> Google Play
//             </GooglePlayButton>
//           </AppButtonContainer>
//         </motion.div>
//       </HeroSection>

//       {/* Feature Section */}
//       <FeatureSection>
//         <FeatureTitle>Key Features</FeatureTitle>
//         <Grid container spacing={3} justifyContent="center">
//           <Grid item xs={12} sm={4}>
//             <FeatureItem>
//               <User size={48} color="#3b82f6" />
//               <Typography variant="h6" color="common.white" mt={2}>
//                 AI-Powered Summaries
//               </Typography>
//               <Typography variant="body1" color="common.white" mt={1}>
//                 Get concise summaries of your notes instantly.
//               </Typography>
//             </FeatureItem>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <FeatureItem>
//               <Code size={48} color="#ef4444" />
//               <Typography variant="h6" color="common.white" mt={2}>
//                 Seamless Transcription
//               </Typography>
//               <Typography variant="body1" color="common.white" mt={1}>
//                 Automatically transcribe voice into text with accuracy.
//               </Typography>
//             </FeatureItem>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <FeatureItem>
//               <Apple size={48} color="#34b7f1" />
//               <Typography variant="h6" color="common.white" mt={2}>
//                 Cross-Platform Support
//               </Typography>
//               <Typography variant="body1" color="common.white" mt={1}>
//                 Access your notes on Android, iOS, and web seamlessly.
//               </Typography>
//             </FeatureItem>
//           </Grid>
//         </Grid>
//       </FeatureSection>

//       {/* Team Section */}
//       <TeamSection>
//         <TeamTitle>Meet Our Team</TeamTitle>
//         <Grid container spacing={3} justifyContent="center">
//           <Grid item xs={12} sm={6} md={4}>
//             <TeamMember>
//               <Code size={48} color="#3b82f6" /> {/* Same icon for both members */}
//               <MemberTitle>ATHUL V</MemberTitle>
//               <MemberDescription>
//                 AI Specialist & Lead Developer
//               </MemberDescription>
//             </TeamMember>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <TeamMember>
//               <Code size={48} color="#3b82f6" /> {/* Same icon for both members */}
//               <MemberTitle>SWAROOP</MemberTitle>
//               <MemberDescription>
//                 AI Specialist & Lead Developer
//               </MemberDescription>
//             </TeamMember>
//           </Grid>
//         </Grid>
//       </TeamSection>

//       {/* Footer Section */}
//       <Footer />
//     </Box>
//   );
// }

// export default LandingPage;

// import React from "react";
// import { Box, Typography, Button, Grid, Stack } from "@mui/material";
// import { motion } from "framer-motion";
// import { styled } from "@mui/system";
// import { Apple, Android } from "@mui/icons-material";
// import { User, Code } from "lucide-react";

// // Import Footer Component (assuming you have a Footer.js in the same directory)
// import Footer from "./Footer";

// // Styled components for a stunning and modern layout
// const HeroSection = styled(Box)({
//   background: "linear-gradient(135deg, #020c1b, #2f4f76)",
//   color: "#fff",
//   height: "100vh",
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   alignItems: "center",
//   padding: "0 4rem",
//   position: "relative",
//   "@media (max-width: 960px)": {
//     gridTemplateColumns: "1fr",
//     textAlign: "center",
//     padding: "4rem 2rem",
//     justifyContent: "center",
//   },
// });

// const HeroText = styled(Box)({
//   padding: "4rem",
//   textAlign: "left",
//   "@media (max-width: 960px)": {
//     textAlign: "center",
//   },
// });

// const HeroImage = styled(Box)({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: "2rem",
// });

// const HeroTitle = styled(Typography)({
//   fontSize: "4.8rem",
//   fontWeight: "900",
//   marginBottom: "1rem",
//   letterSpacing: "1px",
//   textShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
//   "@media (max-width:600px)": {
//     fontSize: "3.5rem",
//   },
// });

// const HeroSubTitle = styled(Typography)({
//   fontSize: "1.6rem",
//   fontWeight: "400",
//   maxWidth: "600px",
//   marginBottom: "2rem",
//   lineHeight: "1.8",
//   color: "#bbb",
//   "@media (max-width:600px)": {
//     fontSize: "1.3rem",
//   },
// });

// const ButtonStyled = styled(Button)({
//   background: "#00ffcc",
//   borderRadius: "30px",
//   padding: "1rem 3rem",
//   fontSize: "1.4rem",
//   fontWeight: "600",
//   color: "#fff",
//   transition: "all 0.4s ease",
//   boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
//   "&:hover": {
//     background: "#00cc99",
//     transform: "scale(1.08)",
//     boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.4)",
//   },
//   "&:active": {
//     transform: "scale(1)",
//     background: "#00cc99",
//   },
// });

// const AppButtonContainer = styled(Stack)({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   marginTop: "2rem",
//   gap: "2rem",
// });

// const AppStoreButton = styled(Button)({
//   backgroundColor: "#333",
//   color: "#fff",
//   padding: "0.8rem 2rem",
//   fontSize: "1.1rem",
//   borderRadius: "8px",
//   display: "flex",
//   alignItems: "center",
//   transition: "background 0.3s ease",
//   "&:hover": {
//     backgroundColor: "#555",
//   },
// });

// const GooglePlayButton = styled(AppStoreButton)({
//   backgroundColor: "#34b7f1",
// });

// const FeatureSection = styled(Box)({
//   padding: "6rem 2rem",
//   backgroundColor: "#101010",
//   color: "#fff",
//   textAlign: "center",
//   position: "relative",
//   zIndex: 2,
//   boxShadow: "0px -10px 60px rgba(0, 0, 0, 0.2)",
// });

// const FeatureTitle = styled(Typography)({
//   fontSize: "2.8rem",
//   fontWeight: "600",
//   marginBottom: "3rem",
//   textShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)",
// });

// const FeatureItem = styled(Box)({
//   backgroundColor: "rgba(255, 255, 255, 0.1)",
//   padding: "2rem",
//   margin: "2rem 1rem",
//   borderRadius: "12px",
//   textAlign: "center",
//   boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
//   transition: "transform 0.3s ease-in-out",
//   "&:hover": {
//     transform: "scale(1.08)",
//     boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
//   },
// });

// const TeamSection = styled(Box)({
//   textAlign: "center",
//   padding: "5rem 2rem",
//   backgroundColor: "#1a1a2e",
// });

// const TeamTitle = styled(Typography)({
//   fontSize: "2.8rem",
//   fontWeight: "700",
//   color: "#fff",
//   marginBottom: "2rem",
//   textShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
// });

// const TeamMember = styled(Box)({
//   backgroundColor: "rgba(255, 255, 255, 0.1)",
//   padding: "2.5rem",
//   borderRadius: "10px",
//   textAlign: "center",
//   margin: "1rem",
//   boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.4)",
//   transition: "transform 0.3s ease-in-out",
//   "&:hover": {
//     transform: "scale(1.1)",
//   },
// });

// const MemberTitle = styled(Typography)({
//   fontSize: "1.7rem",
//   fontWeight: "600",
//   color: "#fff",
//   marginBottom: "1rem",
// });

// const MemberDescription = styled(Typography)({
//   fontSize: "1.1rem",
//   color: "#bbb",
//   lineHeight: "1.7",
// });

// function LandingPage() {
//   return (
//     <Box sx={{ minHeight: "100vh", bgcolor: "#090909" }}>
//       {/* Hero Section */}
//       <HeroSection>
//         <HeroText>
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, ease: "easeInOut" }}
//           >
//             <HeroTitle>DeepNote Plus</HeroTitle>
//             <HeroSubTitle>
//               Instantly transcribe and summarize your voice notes with AI. Stay
//               productive, wherever you are.
//             </HeroSubTitle>
//             <ButtonStyled variant="contained" href="/register" disableElevation>
//               Get Started
//             </ButtonStyled>
//             <AppButtonContainer sx={{ flexDirection: "row", justifyContent: "flex-start", mt: 3 }}>
//               <AppStoreButton href="https://apps.apple.com/us/app/deepnote-plus" target="_blank">
//                 <Apple sx={{ marginRight: "0.5rem" }} /> App Store
//               </AppStoreButton>
//               <GooglePlayButton sx={{ ml: 2 }} href="https://play.google.com/store/apps/details?id=com.deepnoteplus" target="_blank">
//                 <Android sx={{ marginRight: "0.5rem" }} /> Google Play
//               </GooglePlayButton>
//             </AppButtonContainer>
//           </motion.div>
//         </HeroText>
//         <HeroImage>
//           <motion.img
//             src="/path/to/your/hero-image.png" // Replace with your image path
//             alt="DeepNote Plus on Devices"
//             style={{ maxWidth: "80%", height: "auto", borderRadius: "10px", boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)" }}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2, ease: "easeInOut" }}
//           />
//         </HeroImage>
//       </HeroSection>

//       {/* Feature Section */}
//       <FeatureSection>
//         <FeatureTitle>Key Features</FeatureTitle>
//         <Grid container spacing={3} justifyContent="center">
//           <Grid item xs={12} sm={4}>
//             <FeatureItem>
//               <User size={48} color="#3b82f6" />
//               <Typography variant="h6" color="common.white" mt={2}>
//                 AI-Powered Summaries
//               </Typography>
//               <Typography variant="body1" color="common.white" mt={1}>
//                 Get concise summaries of your notes instantly.
//               </Typography>
//             </FeatureItem>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <FeatureItem>
//               <Code size={48} color="#ef4444" />
//               <Typography variant="h6" color="common.white" mt={2}>
//                 Seamless Transcription
//               </Typography>
//               <Typography variant="body1" color="common.white" mt={1}>
//                 Automatically transcribe voice into text with accuracy.
//               </Typography>
//             </FeatureItem>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <FeatureItem>
//               <Apple size={48} color="#34b7f1" />
//               <Typography variant="h6" color="common.white" mt={2}>
//                 Cross-Platform Support
//               </Typography>
//               <Typography variant="body1" color="common.white" mt={1}>
//                 Access your notes on Android, iOS, and web seamlessly.
//               </Typography>
//             </FeatureItem>
//           </Grid>
//         </Grid>
//       </FeatureSection>

//       {/* Team Section */}
//       <TeamSection>
//         <TeamTitle>Meet Our Team</TeamTitle>
//         <Grid container spacing={3} justifyContent="center">
//           <Grid item xs={12} sm={6} md={4}>
//             <TeamMember>
//               <Code size={48} color="#3b82f6" /> {/* Same icon for both members */}
//               <MemberTitle>ATHUL V</MemberTitle>
//               <MemberDescription>
//                 AI Specialist & Lead Developer
//               </MemberDescription>
//             </TeamMember>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <TeamMember>
//               <Code size={48} color="#3b82f6" /> {/* Same icon for both members */}
//               <MemberTitle>SWAROOP</MemberTitle>
//               <MemberDescription>
//                 AI Specialist & Lead Developer
//               </MemberDescription>
//             </TeamMember>
//           </Grid>
//         </Grid>
//       </TeamSection>

//       {/* Footer Section */}
//       <Footer />
//     </Box>
//   );
// }

// export default LandingPage;




import React from "react";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import { Apple, Android } from "@mui/icons-material";
import { User, Code } from "lucide-react";
import Footer from "./Footer";

// Use a minimal, modern font like Inter for the whole page
const HeroSection = styled(Box)({
  background: "linear-gradient(135deg, #020c1b, #2f4f76)",
  color: "#fff",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  padding: "0 2rem",
  position: "relative",
  "@media (max-width: 960px)": {
    gridTemplateColumns: "1fr",
    textAlign: "center",
    padding: "4rem 2rem",
    justifyContent: "center",
  },
});

const HeroText = styled(Box)({
  padding: "2rem",
  textAlign: "left",
  "@media (max-width: 960px)": {
    textAlign: "center",
  },
});

const HeroImage = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
});

const HeroTitle = styled(Typography)({
  fontSize: "4.8rem",
  fontWeight: "700",
  marginBottom: "1rem",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  fontFamily: "'Inter', sans-serif",
  textShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", // subtle shadow for depth
  "@media (max-width: 600px)": {
    fontSize: "3.5rem",
  },
});

const HeroSubTitle = styled(Typography)({
  fontSize: "1.6rem",
  fontWeight: "400",
  maxWidth: "600px",
  marginBottom: "2rem",
  lineHeight: "1.8",
  color: "#bbb",
  fontFamily: "'Inter', sans-serif",
  "@media (max-width: 600px)": {
    fontSize: "1.3rem",
  },
});

const ButtonStyled = styled(Button)({
  background: "#00ffcc",
  borderRadius: "30px",
  padding: "1rem 3rem",
  fontSize: "1.4rem",
  fontWeight: "600",
  color: "#fff",
  transition: "all 0.4s ease",
  boxShadow: "none",
  "&:hover": {
    background: "#00cc99",
    transform: "scale(1.08)",
  },
});

const AppButtonContainer = styled(Stack)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "2rem",
  gap: "1.5rem",
});

const AppStoreButton = styled(Button)({
  backgroundColor: "#333",
  color: "#fff",
  padding: "0.8rem 2rem",
  fontSize: "1.1rem",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  transition: "background 0.3s ease",
  "&:hover": {
    backgroundColor: "#555",
  },
});

const GooglePlayButton = styled(AppStoreButton)({
  backgroundColor: "#34b7f1",
});

const FeatureSection = styled(Box)({
  padding: "4rem 2rem",
  backgroundColor: "#101010",
  color: "#fff",
  textAlign: "center",
});

const FeatureTitle = styled(Typography)({
  fontSize: "2.8rem",
  fontWeight: "600",
  marginBottom: "3rem",
  fontFamily: "'Inter', sans-serif",
});

const FeatureItem = styled(Box)({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  padding: "2rem",
  margin: "1rem",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
  },
});

const TeamSection = styled(Box)({
  textAlign: "center",
  padding: "4rem 2rem",
  backgroundColor: "#1a1a2e",
});

const TeamTitle = styled(Typography)({
  fontSize: "2.8rem",
  fontWeight: "700",
  color: "#fff",
  marginBottom: "2rem",
  fontFamily: "'Inter', sans-serif",
});

const TeamMember = styled(Box)({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  padding: "2.5rem",
  borderRadius: "10px",
  textAlign: "center",
  margin: "1rem",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const MemberTitle = styled(Typography)({
  fontSize: "1.7rem",
  fontWeight: "600",
  color: "#fff",
  marginBottom: "1rem",
});

const MemberDescription = styled(Typography)({
  fontSize: "1.1rem",
  color: "#bbb",
  lineHeight: "1.7",
});

function LandingPage() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#090909" }}>
      {/* Hero Section */}
      <HeroSection>
        <HeroText>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <HeroTitle>DeepNote Plus</HeroTitle>
            <HeroSubTitle>
              Instantly transcribe and summarize your voice notes with AI. Stay
              productive, wherever you are.
            </HeroSubTitle>
            <ButtonStyled variant="contained" href="/register" disableElevation>
              Get Started
            </ButtonStyled>
            <AppButtonContainer sx={{ flexDirection: "row", justifyContent: "flex-start", mt: 3 }}>
              <AppStoreButton href="https://apps.apple.com/us/app/deepnote-plus" target="_blank">
                <Apple sx={{ marginRight: "0.5rem" }} /> App Store
              </AppStoreButton>
              <GooglePlayButton sx={{ ml: 2 }} href="https://play.google.com/store/apps/details?id=com.deepnoteplus" target="_blank">
                <Android sx={{ marginRight: "0.5rem" }} /> Google Play
              </GooglePlayButton>
            </AppButtonContainer>
          </motion.div>
        </HeroText>
        <HeroImage>
          <motion.img
            src="/path/to/your/hero-image.png" // Replace with your image path
            alt="DeepNote Plus on Devices"
            style={{ maxWidth: "80%", height: "auto", borderRadius: "10px", boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </HeroImage>
      </HeroSection>

      {/* Feature Section */}
      <FeatureSection>
        <FeatureTitle>Key Features</FeatureTitle>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <FeatureItem>
              <User size={48} color="#3b82f6" />
              <Typography variant="h6" color="common.white" mt={2}>
                AI-Powered Summaries
              </Typography>
              <Typography variant="body1" color="common.white" mt={1}>
                Get concise summaries of your notes instantly.
              </Typography>
            </FeatureItem>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureItem>
              <Code size={48} color="#ef4444" />
              <Typography variant="h6" color="common.white" mt={2}>
                Seamless Transcription
              </Typography>
              <Typography variant="body1" color="common.white" mt={1}>
                Automatically transcribe voice into text with accuracy.
              </Typography>
            </FeatureItem>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeatureItem>
              <Apple size={48} color="#34b7f1" />
              <Typography variant="h6" color="common.white" mt={2}>
                Cross-Platform Support
              </Typography>
              <Typography variant="body1" color="common.white" mt={1}>
                Access your notes on Android, iOS, and web seamlessly.
              </Typography>
            </FeatureItem>
          </Grid>
        </Grid>
      </FeatureSection>

      {/* Team Section */}
      <TeamSection>
        <TeamTitle>Meet Our Team</TeamTitle>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <TeamMember>
              <Code size={48} color="#3b82f6" />
              <MemberTitle>ATHUL V</MemberTitle>
              <MemberDescription>AI Specialist & Lead Developer</MemberDescription>
            </TeamMember>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TeamMember>
              <Code size={48} color="#3b82f6" />
              <MemberTitle>SWAROOP</MemberTitle>
              <MemberDescription>AI Specialist & Lead Developer</MemberDescription>
            </TeamMember>
          </Grid>
        </Grid>
      </TeamSection>

      {/* Footer Section */}
      <Footer />
    </Box>
  );
}

export default LandingPage;
