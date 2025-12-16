import React, { useState } from "react";


const Form = ({ addTodo }) => {
    const [work, setWork] = useState("");
    const [check, setCheck] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (work.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        addTodo(work, check);
        setWork("");
        setCheck(false);
    }
    const handleCheck = (e) => {
        setCheck(e.target.checked)
    }
    return (
        <form className="Todo" onSubmit={handleSubmit}>
            <input value={work} type="text" placeholder="what is the task today" onChange={(e) => { setWork(e.target.value) }} />
            <button type="submit" >Add</button>
        </form>
    )
}

export default Form