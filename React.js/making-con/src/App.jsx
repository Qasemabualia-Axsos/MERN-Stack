import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function MyButton(){
  return <button>SignOut</button>
}



export default function App(){
  <>
    <nav>
      <h1>Profile</h1>
      <ul>
        <li>Home</li>
        <li>My profile</li>
        <li>Find Connections</li>
      </ul>
      <MyButton/>
    </nav>
    <main>
      <div className="left-main">
        
      </div>
    </main>
  </>
}
