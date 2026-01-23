import React, { useState } from "react";
import { Container, TextField, Button, Box, Typography, Paper } from "@mui/material";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      const res = await axios.post("http://localhost:5000/register", {
        username,
        email,
        password,
      });
      setMessage("Registration successful! You can login now.");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error registering user");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ mt: 5, p: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
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
          <Button variant="contained" onClick={handleRegister}>
            Register
          </Button>
          {message && (
            <Typography color={message.includes("success") ? "green" : "error"}>
              {message}
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
}
