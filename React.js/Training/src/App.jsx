import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function UserForm(){
  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  return (
    <>
    <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>

    </>
  )

}


export default UserForm;


