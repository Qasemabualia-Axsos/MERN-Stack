import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography, Paper } from "@mui/material";
import axios from "axios";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

 const handleLogin = async () => {
  try {
    const res = await axios.post("http://localhost:5000/login", { email, password });
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    setToken(token); // set token in App
    setUser(user);   // set user in App
  } catch (err) {
    setMessage(err.response?.data?.message || "Error logging in");
  }
};

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ mt: 5, p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          {message && (
            <Typography color={message.includes("Welcome") ? "green" : "error"}>
              {message}
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
}
