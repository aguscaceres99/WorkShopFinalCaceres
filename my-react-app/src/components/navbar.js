import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cartwidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark p-4">
      <div className="container">
        <Link to="/" className="navbar-brand">Gaming Store</Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/peripherals" className="nav-link">Periféricos</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/audio" className="nav-link">Audio</Link>
          </li>
          {/* Agrega más categorías según sea necesario */}
          <li className="nav-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;