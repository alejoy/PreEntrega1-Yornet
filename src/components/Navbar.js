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

