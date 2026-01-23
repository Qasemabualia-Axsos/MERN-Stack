import React, { useState } from "react";
import Form from "./components/Form";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
 const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); // store logged-in user
  const [showLogin, setShowLogin] = useState(true);

  if (!token) {
    return showLogin ? (
      <>
        <Login setToken={setToken} setUser={setUser} />
        <button onClick={() => setShowLogin(false)}>Go to Register</button>
      </>
    ) : (
      <>
        <Register />
        <button onClick={() => setShowLogin(true)}>Go to Login</button>
      </>
    );
  }

  return <Form user={user} />; // pass user as prop to Form
}

export default App;
