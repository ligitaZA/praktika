import React from 'react';
import { Link } from 'react-router-dom';


// linkinama i home ir add puslapius. 
const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add</Link>
    </nav>
  );
}

export default Navigation;