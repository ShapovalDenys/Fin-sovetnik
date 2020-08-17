import React from 'react';
import { Link } from 'react-router-dom';

import './MainHeader.scss';
import { NavLink } from 'react-router-dom';

const MainHeader = () => (
  <header className="mainHeader">
    <Link to="/">
    <img src="./img/logo.png" alt="logo"></img>
    </Link>
    <nav  className="mainHeader__nav">
      <ul className="mainHeader__nav-list">
        <li>
          <NavLink className="mainHeader__nav-link" to="/register">ПЕРСОНАЛЬНЫЕ ДАННЫЕ</NavLink>
        </li>
        <li>
          <NavLink className="mainHeader__nav-link" to="/register2">ПАСПОРТНЫЕ ДАННЫЕ</NavLink>
        </li>
        <li>
          <NavLink className="mainHeader__nav-link" to="/pay">АКТИВАЦИЯ СЕРВИСА</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainHeader;
