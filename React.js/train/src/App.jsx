import React, { useState } from "react";
import Form from "./components/Form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const App = () => {
  const [lists, setLists] = useState([]);
  const [edit, setEdit] = useState("");

    const handleSubmit=()=>{
        e.preventDefault();

    }

    const addTodo=(title)=>{
      setLists([...lists,{id:Date.now(),title,isCompleted:false}])
    };

    const deleteTodo=(id)=>{
      setLists(lists.filter(todo=>todo.id !==id))
    }

    const editTodo=(id,title)=>{
      setLists(lists.map(todo=>todo.id=id?{...todo,title:newTitle}:todo))
    }
  return (
    <>

      <Card  sx={{ minWidth: 275, backgroundColor: "white", marginLeft: "600px",textAlign:"center" }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 22 }}>
            Your List!
          </Typography>
          <ToggleButtonGroup
            color="primary"
            // value={alignment}
            exclusive
            // onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="completed">Done!</ToggleButton>
            <ToggleButton value="non-completed">On progres</ToggleButton>
          </ToggleButtonGroup>
        </CardContent>
        <Form lists={lists} addTodo={addTodo} deleteTodo={deleteTodo}/>
      </Card>
    </>
  )
}

export default App