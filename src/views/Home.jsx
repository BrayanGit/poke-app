import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="container">
      <h1 className="d-flex align-items-center justify-content-center">
        Bienvenido a la PokeHome
      </h1>
      <div class="position-absolute top-50 start-50 translate-middle" className="row">
        <div className="col-sm-4 offset-sm-4">
          <div id='poke-Home'>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              className="card-img-top"
              alt="Bulbasaur"
            />
            <h5 className="card-title">Bulbasaur</h5>
            <p className="card-text">A strange seed was planted on its back at birth. 
              The plant sprouts and grows with this Pokémon.
              </p>
              <Link to="/pokemones/Bulbasaur" className="btn btn-primary">
                Ver Detalles
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
