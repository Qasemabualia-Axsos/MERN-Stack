import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./pages/hello";
import PostsList from "./pages/PostsLists";


const App = () => {
  return (
    <>
      <div>
        <Link to="/">
        <button>Home</button>
        </Link>
        <button>Sign in</button>
        <Link to="/posts">
          <button>Posts</button>
        </Link>

      </div>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/posts" element={<PostsList />} />
      </Routes>
    </>
  )
}

export default App