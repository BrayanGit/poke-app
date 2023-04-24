import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Pokemones() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeSelect, setPokeSelect] = useState('');
  const navigate = useNavigate();

  const url_api = 'https://pokeapi.co/api/v2/pokemon/';
  
  useEffect(() => {
    getListadoPokemones();
  },[]);

  const getListadoPokemones = async() => {
    const resp = await fetch(url_api);
    const data = await resp.json();
    setPokeList(data.results);
  };

  const verDetallePokemon = () => {
    navigate(`/pokemones/${pokeSelect}`);
  };

  return(
    <div>
      <section className="container">
      {" - "}
        <h2>Selecciona un pokemon</h2>
        <Form.Select aria-label="Default select example" onChange={(e) => setPokeSelect(e.target.value)}>
          <option>Selecciona un pokemon</option>
          {pokeList.slice(0, 10).map((pokemon, index) => (
            <option key={index} value={pokemon.name}>{pokemon.name}</option>
          ))}
        </Form.Select>
        <Button variant="primary" className="mt-5" onClick={verDetallePokemon}>Ver detalle</Button>
      </section>
    </div>
  );
};
