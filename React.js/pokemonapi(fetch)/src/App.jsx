import { useEffect, useState } from 'react'

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0SubmitNeed a hint? Try pokemon/ditto, pokemon-species/aegislash, type/3')
      .then(res => res.json())
      .then(data => {
        setPokemon(data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>Fetch Pokemon</h1>
      <ol>
        {pokemon.map((p, index) => (
          <li key={index}>{p.name}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
