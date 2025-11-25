import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Likes(){
  const [count,setCount]= useState(0);

  function increase(){
    setCount(count+1)
  }

  return (
    <button onClick={increase}>{count} likes </button>
  );
}

function LoginButton(){
  const [isLogged,setIsLogged]=useState(false);
  function HandleLogin(){
    setIsLogged(!isLogged);
  }
  
  return(
    <button onClick={HandleLogin}>{isLogged ? "logout" : "login"}</button>
  )
}





export default function MyApp(){
  return(
    <>
    <main>
      <nav>
        <h1>Dojonary</h1>
        <input type="text" placeholder='Search' />
        <button>Login</button>
      </nav>
      <div className="content">
        <div className="bigCards">
          <div className="top">
            <div className="left-top">
              <h1>ninja</h1>
              <h2>noun</h2>
              <h2>Plural:nunjas</h2>
              <Likes/>
            </div>
            <div className="right-top">
              <p>A practitioner skilled in the <a href="#">Japanes</a> art of <a href="#">ninjutsu
                </a></p>
            </div>
            </div>
            <div className="bottom">
              <div className="left-top">
              <h1>ninja</h1>
              <h2>noun</h2>
              <h2>Plural:nunjas</h2>
              <Likes/>
            </div>
            <div className="right-top">
              <p>A practitioner skilled in the <a href="#">Japanes</a> art of <a href="#">ninjutsu
                </a></p>
                <LoginButton/>
            </div>
            </div>
          
        </div>
        <div className="smallCard">
          <p>Dojonary is Defined by YOU</p>
          <button>Add Definition</button>
        </div>
      </div>
    </main>
    </>
  )
}
