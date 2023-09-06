import Header from './Header';
import About from './About';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './LoggedinComponent.css';
import axios from 'axios';
const pattern_with_prefix = /(.*?)\(([^()]+)\)([^()]+)\(([^()]+)\)/;


const LoggedInComponent = () => {
  







return (

      <div className="main">
<Header />
<img src='./images/lorecraft.png' alt='logo' />
    </div>
  );
};

export default LoggedInComponent;
