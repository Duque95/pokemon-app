import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);
 
  const handleClick = () => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
          .then(response => response.json())
          // .then(response => console.log(response))
          .then(response => setPokemon(response.results))
  };
  console.log(pokemon)
  return (
    <div className="App">
   <button onClick={e => handleClick()}>
    Fetch
   </button>
   { pokemon.map(el => {
      return (<li>{el.name}</li>)
   })}
    </div>
  );
}

export default App;
