import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0SubmitNeed a hint? Try pokemon/ditto, pokemon-species/aegislash, type/3?ID=12345')
      .then(function (response) {

        const pokemon = (response.data.results)
        setPokemon(pokemon)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])

  return (
    <>
      <h1>Fetch Pokemon</h1>
      <ul>
        {pokemon.map((p, index) => (

          <li key={index}>{p.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
