import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './components/result'

function App() {
  const tabs= ["Tab 1","Tab 2","Tab 3"] 

  const [tab,setTab]=useState("");

  const handleTabClick=(value)=>{
      setTab(value);
  }
 

  return(
    <>
    <h1>Tabs</h1>
    <Result  tabs={tabs} onTabClick={handleTabClick}/>
    {tab && <p>{tab} content is showing here</p>}
    </>
  )
}

export default App
