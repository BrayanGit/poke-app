import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Detalle.css';

export default function Detalles() {
  const url_api = 'https://pokeapi.co/api/v2/pokemon/';
  const { nombre } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getInfoPokemon();
  },[]);

  const getInfoPokemon = async() => {
    const resp = await fetch(url_api + nombre);
    const data = await resp.json();
    setPokemon(data);
  };

  return (
    <div className="mt-5">
      {
        (!pokemon) ? <p>Loading...</p> :
        <div id="poke-results">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <ul>
            <li>Height: {pokemon.height}</li>
            <li>Weight: {pokemon.weight}</li>
            <li>Abilities: {pokemon.abilities.map((a) => a.ability.name).join(", ")}</li>
            <li>Types: {pokemon.types.map((t) => t.type.name).join(", ")}</li>
          </ul>
        </div>
      }
    </div>
  );
}
