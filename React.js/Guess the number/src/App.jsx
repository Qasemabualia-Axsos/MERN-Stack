import { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [secret,setSecret]=useState(Math.floor(Math.random()*50)+1);
  const [result,setResult]=useState("")

  const checkGuess=(guess)=>{
    const numGuess=parseInt(guess)
      if (numGuess>secret){
        setResult("Too high!")
      }
      else if (numGuess<secret){
        setResult("Too Low!")
      }
      else if (numGuess==secret) {
        setResult("Correct!")
      }
      else{
        setResult("You Should Type a Number!")
      }
      
  }
  

  return(
    <>
    <Form checkGuess={checkGuess} />
    <Result message={result}/>
    </>
  )
  }

export default App;
