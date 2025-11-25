import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Information(props){

  return (
    <>
      <h1>{props.first_name} {props.last_name}</h1>
      <h2>Age {props.age}</h2>
      <h3>Hair Color :{props.hairColor}</h3>
    </>
  )
}


export default function app(){
  return (
    <>
        <Information first_name="Doe," last_name="Jane" age="45" hairColor="Black" />
        <Information first_name="Smith," last_name="John" age="88" hairColor="Brown" />
        <Information first_name="Fillmore," last_name="Millard" age="50" hairColor="Brown" />
        <Information first_name="Smith" last_name="Maria" age="62" hairColor="Brown" />
    </>
  )
}

