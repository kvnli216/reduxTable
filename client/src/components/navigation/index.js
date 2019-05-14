import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <div className="navigation">
    <h2>Navigation</h2>
    <NavLink to="/">Home</NavLink>
    <br />
    <NavLink to="/about">About</NavLink>
    <br />
    <NavLink to="/contact">Contact</NavLink>
  </div>
);

export default Navigation;
