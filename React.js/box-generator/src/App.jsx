import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/Box'
import Show from './components/Show'

function App(){
  const [boxes,setBoxes]=useState([]);
  const addBox=(color,width,height) =>{
    setBoxes([...boxes,{color,width,height}])
  }
    return (
      <div className="App">
        <Box addBox={addBox} />
        <Show boxes={boxes} />
      </div>
    )
  }

export default App
