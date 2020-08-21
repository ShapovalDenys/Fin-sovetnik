import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPassportAccess, getPayAccess } from '../Store/Index';
import { useLocation } from 'react-router-dom';

import './MainHeader.scss';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {

  const passportAccess = useSelector(getPassportAccess);
  const payAccess = useSelector(getPayAccess);
  const location = useLocation();

  return (
  <header className="mainHeader">
    <Link to="/">
    <img src="./img/logo.png" alt="logo"></img>
    </Link>
    <nav  className="mainHeader__nav">
      <ul className="mainHeader__nav-list">
        {(location.pathname === "/register" || location.pathname === "/register2" || location.pathname === "/pay")
        &&
        <>
        <li>
          <NavLink className="mainHeader__nav-link" to="/register">ПЕРСОНАЛЬНЫЕ ДАННЫЕ</NavLink>
        </li>
        <li>
          {passportAccess ?
          <NavLink className="mainHeader__nav-link" to="/register2">ПАСПОРТНЫЕ ДАННЫЕ</NavLink>
          :
          <span className="mainHeader__nav-link">ПАСПОРТНЫЕ ДАННЫЕ</span>
          }
        </li>
        <li>
          {payAccess ?
          <NavLink className="mainHeader__nav-link" to="/pay">АКТИВАЦИЯ СЕРВИСА</NavLink>
          :
          <span className="mainHeader__nav-link">АКТИВАЦИЯ СЕРВИСА</span>
          }
        </li>
        </>
        }
      </ul>
    </nav>
  </header>
  );
}

export default MainHeader;
