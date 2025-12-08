import { useState } from 'react'
import CounterForm from './CounterForm'
import CounterDisplay from './CounterDisplay'

function App() {
    const [count,setCount]=useState(0);

    const updateCount=(newValue) =>{
      setCount(newValue)
    };
    return (
      <>

        <CounterForm onCounterChange={updateCount}/>
        <CounterDisplay count={count}/>

      </>
    )
}

export default App;
