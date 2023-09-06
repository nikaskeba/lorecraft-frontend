import React from 'react';
import About from './About';
import CreateNew from './CreateNew';
import Creations from './Creations';
import Profile from './Profile';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import './Header.css';
const Header = () => {
  return (
    <header className="bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand"><img className="logo" src='./images/logo.png' alt='logo' /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/CreateNew" className="nav-link">Create New</Link>
              </li>
              <li className="nav-item">
                <Link to="/Creations" className="nav-link">Creations</Link>
              </li>
              <li className="nav-item">
                <Link to="/Profile" className="nav-link">Profile</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;


