import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getMoneyValue } from '../Store/Index';
import { useSelector } from 'react-redux';
import axios from 'axios';

import './Kabinet.scss';

const Kabinet = () => {

  const moneyValue = useSelector(getMoneyValue);
  const [sendData] = useState(JSON.parse(localStorage.getItem('Data')));

  const onClickButton = (e) => {
    let sendDataToServer = {moneyValue: moneyValue.join(""), id: e.target.id, info: sendData}
    axios.post('/credit.php', sendDataToServer)
    .then(function (response) {
      console.log(response.json())
    })
    .catch(function (error) {
      console.log(error);
    });
  }


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
      <img src="./img/proCredit.jpg" alt="proCredit"></img>
      <p className="service__card-text">
        Кредиты на карту до 100 000 грн.<br></br>
        Срок - до 12 месяцев. Ставка от 5,9% в месяц.<br></br>
        Минимум документов – паспорт и ИНН<br></br>
        Онлайн оформление кредитов до 25 тыс грн.<br></br>
        Кредитуем физлиц и бизнес</p>
      <span className="service__card-summ">до <span className="service__card-summ-money">{moneyValue} </span> грн.</span>
      <button onClick={(e) => onClickButton(e)} id="121" className="service__card-link">Получить деньги</button>
    </div>

    <div className="service__card">
        <img src="./img/goFingo.png" alt="goFingo"></img>
      <p className="service__card-text">Размер займа от 1000-10 000 грн.<br></br>
        Первый кредит под 0%<br></br>
        гражданин Украины старше 18 лет</p>
      <span className="service__card-summ">до <span className="service__card-summ-money">{moneyValue} </span> грн.</span>
      <button onClick={(e) => onClickButton(e)} id="136" className="service__card-link">Получить деньги</button>
    </div>

    <div className="service__card">
        <img src="./img/euroMoney.png" alt="euroMoney"></img>
      <p className="service__card-text">
        Сумма: от 1000 по 7 000 при первом обращении и до 15 000 постоянным клиентам.<br></br>
        Возраст: с 18 по 65 лет.<br></br>
        Процентная ставка 2,5%</p>
      <span className="service__card-summ">до <span className="service__card-summ-money">{moneyValue} </span> грн.</span>
      <button onClick={(e) => onClickButton(e)} id="135" className="service__card-link">Получить деньги</button>
    </div>

    <div className="service__card">
        <img src="./img/zeCredit.png" alt="zeCredit"></img>
      <p className="service__card-text">
        Cумма первого кредита от 1000 грн. до 7000 грн<br></br>
        Cумма повторного кредита до 7000 грн<br></br>
        Период кредитования от 1 од 30 дней с возможностью пролонгации тела кредита<br></br>
        Первый кредит - 0,01%<br></br>
        Повторный кредит - 1,7% (поторный займ не оплачивается)</p>
      <span className="service__card-summ">до <span className="service__card-summ-money">{moneyValue} </span> грн.</span>
      <button onClick={(e) => onClickButton(e)} id="137" className="service__card-link">Получить деньги</button>
    </div>

  </section>

  </>
  );
}

export default Kabinet;
