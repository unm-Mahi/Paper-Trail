import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginNoRegex() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // fetch users from json-server
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    // simple check for email & password
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
  localStorage.setItem("user", JSON.stringify(user)); // save user info
  setTimeout(() => {
    navigate("/Origins");
  }, 800);
}

else {
      setMessage(" Invalid email or password!");
    }
  };

  return (
    <div style={{ backgroundColor: "rgba(158, 185, 234, 0.21)", padding: "0", margin: "0" }}>
    <div style={styles.container}>
      <h2 style={styles.heading}>Login Page</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      {message && <p style={styles.msg}>{message}</p>}
      <br /> <br />
      <p style={{ marginTop: "10px", color: "rgba(16, 32, 61, 1)" }}>Not a user?*{" "}
        <span style={{ color: "rgba(9, 25, 54, 1)", cursor: "pointer", fontWeight: "bold" }} onClick={() => navigate("/Adduser")}>
        Sign up here
        </span></p>
    </div>
    </div>
    

  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px", 
    color: 'rgba(3, 16, 41, 1)'
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "rgba(9, 25, 54, 1)",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  msg: {
    marginTop: "15px",
    fontWeight: "bold",
  },
};

export default LoginNoRegex;