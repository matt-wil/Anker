import React from 'react';
import { Link } from 'react-router-dom';
import '../NotFoundTattoo.css';

const NotFound = () => {
  return (
    <div className="not-found-tattoo-container">
      <div className="tattoo-skin">
        <h1 className="tattoo-404">4<span className="tattoo-zero">0</span>4</h1>
        <p className="tattoo-message">Oops! Looks like this design wasn't meant to be here.</p>
        <div className="ink-splatter splatter-1"></div>
        <div className="ink-splatter splatter-2"></div>
        <div className="ink-splatter splatter-3"></div>
      </div>
      <Link to="/" className="tattoo-home-button">Back to the Studio</Link>
    </div>
  );
};

export default NotFound;