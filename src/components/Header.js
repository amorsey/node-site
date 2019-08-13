import React, { Component } from 'react';
import '../stylesheets/_Header.scss';
import {Link} from 'react-router-dom';


const Header = ({activePage}) => (
  <nav className="nav-bar">
    <Link to="/" className="home-logo">Alex Morsey</Link>
    <div className="nav-buttons">
      <Link to="/" className="header-link">Home</Link>
      <Link to="/about/" className="header-link">About</Link>
      <Link to="/projects/" className="header-link">Projects</Link>
    </div>
  </nav>
);

export default Header;
