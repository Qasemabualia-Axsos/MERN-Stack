import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";


const Form=()=>{
    const {userName,setUserName}=useContext(UserContext)
    return(
        <>
            <label>Your Name:</label>
            <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        </>
    )
}


export default Form