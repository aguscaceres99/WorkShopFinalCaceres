import React from 'react';
import CartWidget from './cartwidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark p-4">
      <div className="container">
        <span className="navbar-brand">Mundo Gaming</span>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">Nosotros</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contacto</a>
          </li>
          <li className="nav-item">
            <a href="/faq" className="nav-link">Preguntas Frecuentes</a>
          </li>
          <li className="nav-item">
          <a href="/faq" className="nav-link">Gaming Store</a>
          <li className="nav-item"></li>
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;