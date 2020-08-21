import React from 'react';
import { Link } from 'react-router-dom';
import { getMoneyValue } from '../Store/Index';
import { useSelector } from 'react-redux';

import './Kabinet.scss';

const Kabinet = () => {

  const moneyValue = useSelector(getMoneyValue);

  return (
  <>
  <section className="kabinet">

      <div className="kabinet__text-block">
        <span className="kabinet__article">Мы подобрали Вам займы.</span>
        <p className="kabinet__article-text">
          Одновременно подайте заявку, как минимум, в 3 компании для гарантированного получения займа.
        </p>
      </div>

      <div className="kabinet__image-block">
        <Link to="/index"><img src="./img/logo.png" alt="logo"></img></Link>
      </div>

  </section>

  <section className="service">

    <div className="service__card">
      <img src="./img/moneyman.png" alt="moneyman"></img>
      <p className="service__card-text">Процентная ставка 0%</p>
      <span className="service__card-summ">до <span className="service__card-summ-money">{moneyValue} RUB</span> руб.</span>
      <a className="service__card-link" href="https://www.google.com">Получить деньги</a>
    </div>

    <div className="service__card">
      <img src="./img/vebzaim.png" alt="vebzaim"></img>
      <p className="service__card-text">Процентная ставка 0%</p>
      <span className="service__card-summ">до <span className="service__card-summ-money">{moneyValue} RUB</span> руб.</span>
      <a className="service__card-link" href="https://www.google.com">Получить деньги</a>
    </div>

    <div className="service__card">
      <img src="./img/joymoney.png" alt="joymoney"></img>
      <p className="service__card-text">Процентная ставка 0%</p>
      <span className="service__card-summ">до <span className="service__card-summ-money">{moneyValue} RUB</span> руб.</span>
      <a className="service__card-link" href="https://www.google.com">Получить деньги</a>
    </div>

  </section>
  </>
  );
}

export default Kabinet;
