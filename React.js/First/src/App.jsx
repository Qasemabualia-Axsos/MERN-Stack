import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Hello(){
  return <h1>Hello Dojo!</h1>
}

const lists=[
  {title:'Learn React'},
  {title:'Climb Mt. Everest'},
  {title:'Run a marathon'},
  {title:'Feed the dogs'},
];


export default  function MyApp(){
   const todoList= lists.map((list,index) =>(
      <li key={index} > {list.title}</li>
   ));
  return(
    <div className='main'>
      <Hello/>
      <p className='text'>Things I need to do:</p>
      <ul className='list' >{todoList}</ul>
    </div>
  )
}
