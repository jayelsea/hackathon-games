import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '15px', color: '#fff' }}>Inicio</Link>
      <Link to="/search" style={{ marginRight: '15px', color: '#fff' }}>Buscar</Link>
    </nav>
  );
};

export default Navbar;
