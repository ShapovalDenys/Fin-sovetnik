import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMoneyValue, setMoneyValue } from '../Store/Index';

import { Range, getTrackBackground } from "react-range";

import './Header.scss';

const MIN = 1000;
const MAX = 100000;

const Header = () => {
  const moneyValue = useSelector(getMoneyValue);
  const [rangeValue, setRangeValue] = useState([moneyValue]);

  const dispatch = useDispatch();
/*
JSON.parse(localStorage.getItem('MoneyValue'))
*/
  useEffect(() => {
    dispatch(setMoneyValue(rangeValue))
  }, [rangeValue]);

  useEffect(() => {
    localStorage.setItem('MoneyValue', JSON.stringify(rangeValue));
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
          <Range
            step={1000}
            min={MIN}
            max={MAX}
            values={rangeValue}
            onChange={values => setRangeValue(values)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
              ...props.style,
              height: "36px",
              marginTop: "60px",
              display: "flex",
              width: "100%"
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "10px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: rangeValue,
                  colors: ["#0DD542", "#ccc"],
                  min: MIN,
                  max: MAX
                }),
                alignSelf: "center"
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '34px',
              width: '34px',
              borderRadius: "50%",
              backgroundColor: '#0DD542'
            }}
          />
        )}
      />
          {/*<input
            type="range"
            className="money__block-range"
            min="0"
            max="100000"
            step="1000"
            onChange={(e) => setRangeValue(e.target.value)}
            value={rangeValue}
            >
            </input>
          */}
           <div className="money__block-range-sum">
            <span>1000</span>
            <span>100 000</span>
          </div>
          <span className="money__block-sum">{rangeValue} грн</span>
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
