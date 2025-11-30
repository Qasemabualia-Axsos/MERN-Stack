import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const UserForm = () => {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword] = useState("");

  const createUser=(e) => {
    e.preventDefault();
    console.log("welcome",{username,email,password});
    setUsername("");
    setEmail("");
    setPassword("");
  }
    return (
      <>
      <form onSubmit={createUser}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>

         <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

         <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <button type='submit'>Create User</button>
      </form>
      </>
    )
}





export default UserForm;


