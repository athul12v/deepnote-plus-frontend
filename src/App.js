// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate here
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Firebase Auth
import IndexPage from "./components/LandingPage";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import NavigationBar from "./components/NavigationBar";
import SettingsPage from './components/SettingsPage';

function App() {
  const [user, setUser] = useState(null); // Local state to track authenticated user
  const auth = getAuth();

  // Listen to Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set user if logged in, null if logged out
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, [auth]);

  return (
    <Router>
      {/* Navigation Bar */}
      <NavigationBar user={user} /> {/* Pass user to NavigationBar to conditionally render content */}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />} // Redirect to login if not authenticated
        />
        <Route
          path="/settings"
          element={user ? <SettingsPage /> : <Navigate to="/login" />} // Redirect to login if not authenticated
        />

        {/* Catch-all route, redirect to login if the user is not authenticated */}
        <Route path="*" element={<Navigate to={user ? "/home" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
