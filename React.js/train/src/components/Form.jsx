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
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from "@mui/material/colors";


const Form = (props) => {
    const [newTodo, setNewTodo] = useState("");
    const [editTodo, setEditTodo] = useState("");

    const onDeleteHanle = (id) => {
        props.deleteTodo(id)
    }

    const onEditHandle = (id) => {
        props.addTodo(editTodo)
    }

    const addHandle = (e) => {
        props.addTodo(newTodo);
        e.preventDefault();
        setNewTodo("");
    }
    return (
        <>
            <form style={{ padding: "15px" }} >
                <Box sx={{ width: 500, maxWidth: '100%', display: "flex", justifyContent: "space-around", gap: "15px" }}>
                    <TextField value={newTodo} onChange={(e) => setNewTodo(e.target.value)} fullWidth label="Add new item" id="fullWidth" />
                    <Button onClick={addHandle} variant="contained" color="success">Add</Button>
                </Box>

                {props.lists.map((item, index) => (
                    <Box key={item.id} component="section" sx={{ p: 2, border: '1px dashed grey',fontSize:12,marginTop:2 }}>
                        <CardContent style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <h1>{item.title}</h1>
                            <div>
                                <button>
                                    <SettingsIcon />
                                </button>
                                <button onClick={()=>onDeleteHanle(item.id)} >
                                    <DeleteForeverIcon />
                                </button>
                            </div>
                        </CardContent>
                    </Box>
                ))}

            </form >
        </>
    )
}


export default Form