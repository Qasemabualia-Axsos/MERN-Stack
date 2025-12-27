import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo';
import { useState } from 'react';



export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [displayedTodosType,setdisplayedTodosType]=useState("all")

  function handleCheckClick(id) {
    const updatedTodos = todos.map((t) => {
      if (t.id == id) {
        t.isCompleted = !t.isCompleted
      }
      return t;
    })
    setTodos(updatedTodos);
  }

  function handleDeleteConfirm(id) {
    const updatedTodos = todos.filter((t) => t.id !== id);
    setTodos(updatedTodos);
  }

   function handleUpdateConfirm(id,updatedTodo) {
        const updatedTodos = todos.map((t) => {
            if (t.id == id) {
                return { ...t, title: updatedTodo.title, details: updatedTodo.details }
            } else {
                return t;
            }
        })
        setTodos(updatedTodos);
    }

    function changedDisplayedType(e){
      setdisplayedTodosType(e.target.value)
    }
  function handleAddClick() {
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "",
      isCompleted: false
    }
    setTodos([...todos, newTodo])
    setTitleInput("");
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const completedTodos=todos.filter((t)=>{
    return t.isCompleted

  })
  const notCompletedTodos=todos.filter((t)=>{
    return !t.isCompleted
  })
  
  let todosToBeRendered=todos

  if (displayedTodosType=='completed'){
    todosToBeRendered=completedTodos

  }else if (displayedTodosType=='non-completed'){
    todosToBeRendered=notCompletedTodos
  }

  const todosJsx = todosToBeRendered.map((t) => {
    return <Todo key={t.id} todo={t} handleCheck={handleCheckClick} handleDeleteConfirm={handleDeleteConfirm} handleUpdateConfirm={handleUpdateConfirm}
 />
  })
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{width:"700px"}} fixed>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h2'>
              ToDo List
            </Typography>
            <Divider />
            {/* Toggle Buttons */}
            <ToggleButtonGroup style={{ marginTop: "30px" }}
              value={displayedTodosType}
              exclusive
              onChange={changedDisplayedType}
              aria-label="text alignment"
            >
              <ToggleButton value="all" aria-label="left aligned">
                All
              </ToggleButton>
              <ToggleButton value="completed" aria-label="centered">
                completed
              </ToggleButton>
              <ToggleButton value="non-completed" aria-label="right aligned">
                Non-completed
              </ToggleButton>
            </ToggleButtonGroup>
            {/*=== toggle Buttons ===*/}
            {todosJsx}
            {/* Form */}
            <div style={{ marginTop: "20px"}}>
              <br/>
              <TextField value={titleInput} onChange={(e) => setTitleInput(e.target.value)} style={{ width: "80%" }} id="standard-basic" label="Your Todo" variant="standard" />
              <button onClick={handleAddClick} style={{ backgroundColor: "blue", color: "white",marginTop:"15px",marginLeft:"15px" }}>Add</button>
            </div>

            {/*=== Form ===*/}
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}