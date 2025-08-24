import React, { useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        setMsg(await res.text());
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-group">
                <input 
                    className="input-field"
                    placeholder="Username" 
                    value={username}
                    onChange={e => setUsername(e.target.value)} 
                    required 
                />
            </div>
            <div className="input-group">
                <input 
                    className="input-field"
                    placeholder="Password" 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <button className="primary-btn" type="submit">Login</button>
            {msg && <div className="msg">{msg}</div>}
            
            <div className="forgot-password">
                <a href="#" className="link">Forgot your password?</a>
            </div>
        </form>
    );
}