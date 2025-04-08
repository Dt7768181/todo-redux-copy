import React, { useState } from "react";
import { Link } from "react-router-dom"; 

export default function Login() {
  const [loginObj, setLoginObj] = useState({ email: "", pass: "" });

  const handleLogin = () => {
    // For now, just log the object (add validation/auth logic here later)
    console.log("Login attempt:", loginObj);
  };

  return (
    <div className="App-User-Row">
      <div>
        <h3>User Login Form</h3>
        <p>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setLoginObj({ ...loginObj, email: e.target.value })}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setLoginObj({ ...loginObj, pass: e.target.value })}
          />
        </p>
        <p>
          <Link to="/">New user? Register here</Link>
        </p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
