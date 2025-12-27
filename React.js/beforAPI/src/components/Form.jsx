import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";


const Form = () => {
    const {addUser}=useContext(UserContext);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");


    const SubmitHandle = (e) => {
        e.preventDefault();
        addUser({
            id:Date.now(),
            userName,
            email,
            role
        });
        setUserName("");
        setEmail("");
        setRole("");
    }
    return (
        <>
            <form onSubmit={SubmitHandle} style={{ border: "1px solid black", padding: "50px", borderRadius: "20px", background: "black", color: "white" }}>
                <div>
                    <label style={{ marginRight: "20px" }}>Name:</label>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <label style={{ marginRight: "20px" }}>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label style={{ marginRight: "20px" }}>Role:</label>
                    <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
                </div>
                <button style={{ marginTop: "20px" }}>Add User</button>
            </form>
        </>
    )
}

export default Form