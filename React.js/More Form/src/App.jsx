import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UserForm() {
  
  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  return (
    <>
    <form>
        <div className="first_name">
          <label>First Name</label>
          <input type="text" value={firstname}  onChange={(e) => setFirstname(e.target.value)}/>
          {
            firstname.length>0 && firstname.length<2? <p>First Name Must be at least 2 Characters</p>:""
          }
          </div>
          <div className="last_name">
          <label>Last Name</label>
          <input type="text" value={lastname}  onChange={(e) => setLastname(e.target.value)}/>
          {
            lastname.length>0 && lastname.length<2 ? <p>Last Name Must be at least 2 Characters</p>:""
          }
          </div>
          <div className="email">
          <label>Email</label>
          <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
          {
            email.length>0 && email.length<2 ? <p>Email must be at least 2 Characters</p>:""
          }
          </div>
          <div className="password">
          <label>Password</label>
          <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
          {
            password.length>0 && password.length<8 ? <p>Password must be at least 8 Characters</p>:""
          }
          </div>
          <div className="password">
          <label>Confirm Password</label>
          <input type="password" value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)}/>
          {
            confirmPassword.length>0 && confirmPassword!==password ? <p>Passwords must match</p>:""
          }
          </div>
        
        </form>
   
   
    </>
  )

}

export default UserForm