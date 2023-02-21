import * as React from 'react';
import { Link } from 'react-router-dom';

export function Header () {
  return (
    <div className="Header">
      <h1>Cinema Circus</h1>
      <p>A Resource For All Your Movie Needs!</p>
      <div className = "HeaderLinks">
        <Link to="/favorites"><h3>My Favorites </h3>
        </Link>
        <Link to = "/"><h3> Home</h3></Link>
      </div>
    
    </div>
  );
}
