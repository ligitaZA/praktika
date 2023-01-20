import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add</Link>
      <Link to="/edit">Edit</Link>
    </nav>
  );
}

export default Navigation;