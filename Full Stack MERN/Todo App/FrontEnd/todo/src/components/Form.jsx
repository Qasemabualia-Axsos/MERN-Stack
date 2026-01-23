import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';



export default function Form({ user }) {
    const [todo, setTodo] = useState("");
    const { todos, addTodo, deleteTodo } = useContext(TodoContext);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Todo App
                        </Typography>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Container maxWidth="sm" style={{ marginTop: "30px" }}>
                <Box sx={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp8171332.jpg)', backgroundSize: 'cover', height: '700px', width: '800px', borderRadius: "3%" }}>
                    <div style={{ marginLeft: "15px" }}>
                        <h1>Welcome, {user?.username}</h1>  {/* <-- Display username here */}

                        <TextField
                            placeholder='Add your todo'
                            variant="outlined"
                            size="small"
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                            sx={{ background: 'white', borderRadius: 1, mr: 1 }}
                        />
                        <Button
                            variant="contained"
                            onClick={() => { addTodo(todo); setTodo(""); }}
                        >
                            Add
                        </Button>
                    </div>

                    {/* Todo list */}
                    <Paper sx={{ width: '90%', maxWidth: 350, mt: 3, ml: 2, borderRadius: 3, background: 'rgba(255,255,255,0.9)' }} elevation={6}>
                        <List>
                            {todos.map((t) => (
                                <ListItem key={t._id} secondaryAction={
                                    <IconButton edge="end" onClick={() => deleteTodo(t._id)} sx={{ color: 'red' }}>❌</IconButton>
                                }>
                                    <ListItemText primary={t.text} primaryTypographyProps={{ fontWeight: 'bold', color: '#333' }} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Box>
            </Container>
        </>
    );
}
