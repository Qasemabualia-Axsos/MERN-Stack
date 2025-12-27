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
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import "../App.css";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

export default function Todo({ todo, handleCheck, handleDeleteConfirm, handleUpdateConfirm }) {
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [showUpdateAlert, setShowUpdateAlert] = useState(false);
    const [updatedTodo, setUpdatedTodo] = useState({ title: "", details: "" });
    function handleCheckClick() {
        handleCheck(todo.id);
    }
    function handleDeleteClick() {
        setShowDeleteAlert(true)
    }
    function handleUpdateClick() {
        setUpdatedTodo({
            title: todo.title,
            details: todo.details,
        });
        setShowUpdateAlert(true);
    }
    function handleDeleteConfirmClose() {
        setShowDeleteAlert(false)
    }
    function handleUpdateClose() {
        setShowUpdateAlert(false)
    }

    return (
        <>
            <Dialog
                onClose={handleUpdateClose}
                open={showUpdateAlert}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Update A Todo"}
                </DialogTitle>
                <DialogContent style={{ display: "grid", width: "600px" }}>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        label="Task title"
                        value={updatedTodo.title}
                        onChange={(e) => setUpdatedTodo({ ...updatedTodo, title: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        label="Details"
                        value={updatedTodo.details}
                        onChange={(e) => setUpdatedTodo({ ...updatedTodo, details: e.target.value })}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUpdateClose} >Close</Button>
                    <Button
                        onClick={() => {
                            handleUpdateConfirm(todo.id, updatedTodo);
                            setShowUpdateAlert(false);
                        }}
                        autoFocus
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                onClose={handleDeleteConfirmClose}
                open={showDeleteAlert}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this item?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This action CANNOT be undone.This will permanently delete the item
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteConfirmClose} >Disagree</Button>
                    <Button onClick={() => handleDeleteConfirm(todo.id)} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <Card className='todoCard' sx={{ minWidth: 500, background: "blue", color: "white", marginTop: "20px" }}>
                <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <Typography variant='h6'>
                            {todo.title}
                        </Typography>
                        <Typography variant='h6'>
                            {todo.details}
                        </Typography>
                    </div>
                    <div >
                        <IconButton onClick={() => { handleCheckClick() }} className='icon' style={{ color: todo.isCompleted ? "white" : "black", background: todo.isCompleted ? "black" : "white", marginLeft: "5px" }} aria-label="delete">
                            <CheckIcon />
                        </IconButton>
                        <IconButton onClick={handleUpdateClick} className='icon' style={{ color: "black", background: "white", marginLeft: "5px" }} aria-label="delete">
                            <BuildOutlinedIcon />
                        </IconButton>
                        <IconButton onClick={handleDeleteClick} className='icon' style={{ color: "black", background: "white", marginLeft: "5px" }} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}