import React from 'react';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">

      <div className="footer__inner-left">
        <img src="./img/logo.png" alt="logo"></img>
        <p>
          8 (9963) 22-37-16<br></br>
          support@moneydar.ru<br></br>
          Почтовый адрес: г.Тюмень,<br></br>
          56, 625000, а/я № 911
        </p>
      </div>

      <div className="footer__inner-center">
        <img src="./img/mastersaim.png" alt="mastersaim"></img>
        <img src="./img/mirsaim.png" alt="mirsaim"></img>
        <img src="./img/unitisaim.png" alt="unitisaim"></img>
        <img src="./img/visasaim.png" alt="visasaim"></img>
      </div>

      <div  className="footer__inner-right">
        <a href="https://www.google.com">ссылка</a>
        <a href="https://www.google.com">ссылка</a>
        <a href="https://www.google.com">ссылка</a>
      </div>

    </div>
  </footer>
);

export default Footer;
