import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Counter(){
  const [num,setNum]=useState(0)
  return (
    <>
    <h1>{num}</h1>
    <button onClick={() => setNum(num+1)}>+</button>
    <button onClick={() => setNum(num-1)}>-</button>
    <button onClick={() => setNum(0)}>  Reset</button>
    </>
  )
}


function LiveInput(){
  const [text,setText]=useState("");

  return (
    <>
    <input onChange={(e) => setText(e.target.value)} />
    <p>You typed: {text}</p>
    </>
  )
}

function LoginForm(){
  const [username,setUsername]=useState("");

  function handleSumbit(e){
    e.preventDefault(); 
    alert ("Welcome" + username )
  }
  return (
    <form onSubmit={handleSumbit}>
      <input onChange={(e) => setUsername(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  )
}


function Background(){
  const [color,setColor]=useState("white");

  return (
    <div style={{background:color,height:"100vh"}} >
    <button onClick={() => setColor("red")}>Red</button>
    <button onClick={() => setColor("black")} >Black</button>

    </div>
  )
}





export default function MyApp(){
  return(
    <>
    <Counter/>
    <br/>
    <LiveInput/>
    <br/>
    <LoginForm/>
    <br/>
    <Background/>
    </>
  )
}
