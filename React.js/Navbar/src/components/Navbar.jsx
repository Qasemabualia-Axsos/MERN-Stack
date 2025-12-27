import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";



const Navbar=()=>{

    const {userName}=useContext(UserContext)
    return(
        <>
            <nav style={{backgroundColor:"purple",height:"100px"}}  >
                <h1 style={{color:"white"}} >Hi {userName}!</h1>
            </nav>
        </>
    )
}


export default Navbar