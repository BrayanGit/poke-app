import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import './Navbar.css';

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "");

  return(
    //navbar navbar-expand-sm navbar-dark bg-dark
    <Nav class="navbar bg-dark" data-bs-theme="dark">
      <Link className="navbar-brand" to="/">
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
        alt="Logo" 
        className="mi-Logo me-1" />
      </Link>
      {" - "}
      <Nav className="me-auto">
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        {" - "}
        {" - "}
        <NavLink className={setActiveClass} to="/pokemones">
          Pokemones
        </NavLink>
      </Nav>
    </Nav>  
  );
  
}
