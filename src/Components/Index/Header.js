import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMoneyValue, setMoneyValue } from '../Store/Index';

import './Header.scss';

const Header = () => {
  const moneyValue = useSelector(getMoneyValue);
  const [rangeValue, setRangeValue] = useState(moneyValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMoneyValue(rangeValue))
  }, [rangeValue])

  return (
  <div className="header">
    <div className="header__logo">
      <img src="./img/logo.png" alt="logo"></img>
    </div>
    <div className="header__wrap">

      <div className="money__block">
        <div className="money__block-inner">
          <img className="money__block-img" src="./img/idea-img.png" alt="idea"></img>
          <h4 className="money__block-article">Какую сумму вы хотите получить?</h4>
          <input
            type="range"
            className="money__block-range"
            min="0"
            max="100000"
            step="1000"
            onChange={(e) => setRangeValue(e.target.value)}
            value={rangeValue}
            >
            </input>
          <div className="money__block-range-sum">
            <span>1000</span>
            <span>100 000</span>
          </div>
          <span className="money__block-sum">{rangeValue} руб</span>
          <div className="money__block-percent-block">
            <span>Проценты: <span className="money__block-percent-block-span">{rangeValue * 0.325}</span></span>
            <span>Возвращаете: {rangeValue}</span>
          </div>
          <Link className="money__block-button" to="/register">Получить деньги</Link>
        </div>
      </div>

      <div className="article__block">
        <h4 className="article__block-article">Бесплатный займ</h4>
        <span className="article__block-percent">0%</span>
        <div className="article__block-icons">

          <div className="article__block-icon">
            <img src="./img/sale.png" alt="sale"></img>
            <span>0% на любой срок займа</span>
          </div>

          <div className="article__block-icon">
            <img src="./img/stopclock.png" alt="stopclock"></img>
            <span>0% на любой срок займа</span>
          </div>

          <div className="article__block-icon">
            <img src="./img/bell.png" alt="bell"></img>
            <span>0% на любой срок займа</span>
          </div>

        </div>
      </div>

    </div>
  </div>
  );
}

export default Header;
