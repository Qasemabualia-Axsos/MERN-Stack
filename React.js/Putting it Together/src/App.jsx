import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Cards(props){
    return (
     <div>
      <h1>{props.first_name} {props.last_name}</h1>
      <h2>hair Color:{props.hairColor}</h2>
     </div>
    )
}


function Button(props){
  const [age,setAge]=useState(props.initAge);
  return (
    <button onClick={() => setAge(age+1)}>Birthday Button for {props.first_name} {props.last_name} (Age:{age})</button>
  )
}


export default function App(){
    return (
      <>
      <Cards first_name="Doe," last_name="Jane"    hairColor="black"/>
      <Button  first_name="Doe," last_name="Jane" initAge={45} />

      <Cards first_name="Smith," last_name="John" age={88}   hairColor="Brown"/>
      <Button  first_name="Smith," last_name="John" initAge={88} />
      </>
    )

}

