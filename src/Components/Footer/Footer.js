import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">

      <div className="footer__inner-left">
        <Link to="/index"><img src="./img/logo.png" alt="logo"></img></Link>
        <p>
          +38 (050) 22-37-16<br></br>
          support@fin-sovet.com<br></br>
          Почтовый адрес: г. Киев,<br></br>
          ул. Олександра Мишуги, 56
        </p>
      </div>

      <div className="footer__inner-center">
        <img src="./img/mastersaim.png" alt="mastersaim"></img>
        <img src="./img/visasaim.png" alt="visasaim"></img>
      </div>

      <div  className="footer__inner-right">
        <Link to="/Oferta.pdf">Публичная Оферта</Link>
        <Link to="/GDPR.pdf">Политика GDPR</Link>
      </div>

    </div>
  </footer>
);

export default Footer;
