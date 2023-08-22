/* import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ categories }) => {
  // Verifica si categories está definido y no es null antes de usar map
  if (!categories || categories.length === 0) {
    return null; // O muestra un mensaje de carga si lo deseas
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Brand</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          {categories.map((category) => (
            <li className="nav-item" key={category}>
              <Link className="nav-link" to={`/category/${category}`}>
                {category}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <Link className="nav-link" to="/about">Acerca de</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar; */

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
function Navbar({ categories }) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            <div className="logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/480px-Android_O_Preview_Logo.png" alt="Logo" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

