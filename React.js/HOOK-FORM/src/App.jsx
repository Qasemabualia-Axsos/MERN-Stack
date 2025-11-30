import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UserForm() {
  
  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");


  return (
    <>
    <div>
        <div className='upper'>
          <label>First Name</label>
          <input type="text" value={firstname}  onChange={(e) => setFirstname(e.target.value)}/>
          <label>Last Name</label>
          <input type="text" value={lastname}  onChange={(e) => setLastname(e.target.value)}/>
          <label>Email</label>
          <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <h2>Your Form Data</h2>
        <div className='result'>
          <h1>First Name :{firstname}</h1>
          <h1>Last Name :{lastname}</h1>
          <h1>Email: {email}</h1>
          <h1>Password : {password}</h1>
          <h1>Confirm Password : {password}</h1>
        </div>
   
    </div>
    </>
  )

}

export default UserForm
