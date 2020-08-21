import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMoneyValue, setMoneyValue } from '../Store/Index';
import { useLocation } from 'react-router-dom';
import './Counter.scss';
import CountdownTimer from "react-component-countdown-timer";

const Counter = () => {

  const moneyValue = useSelector(getMoneyValue);
  const dispatch = useDispatch();
  const location = useLocation();

  const [onEdit, setOnedit] = useState(false);
  const [inputValue, setInputValue] = useState(moneyValue);

  const onChangeSumm = (e) => {
    if (e.keyCode === 13) {
      dispatch(setMoneyValue((e.target.value > 100000 && 100000) || (e.target.value < 1000 && 1000) || e.target.value));
      localStorage.setItem('MoneyValue', JSON.stringify((e.target.value > 100000 && 100000) || (e.target.value < 1000 && 1000) || e.target.value));
      setOnedit(false);
    }
    if (e.keyCode === 27) {
      setOnedit(false);
    }
  }

  const onClickEdit = () => {
    setOnedit(!onEdit);
    dispatch(setMoneyValue(inputValue));
    localStorage.setItem('MoneyValue', JSON.stringify(inputValue))
  }

  return (
  <section className="counter">
    <div className="counter__wrap">

      <div className="counter__wrap-inner">
        <span className="counter__wrap-inner-text">Льготные условия истекают через:</span>
        <CountdownTimer className="counter__wrap-inner-counter" count={1200} color="#0dd542" size="65" hideDay/>
      </div>

      {(location.pathname === "/pay" || location.pathname === "/analys–1")
      ?
      <div className="counter__wrap-inner-paragraf">
        <p>
          <span>Внимание!</span> Вносите только достоверную информацию,
            так как ложные данные могут стать причиной
            для отказа получения средств.
        </p>
      </div>
      :
      <div className="counter__wrap-inner">
        <button type="button" onClick={onClickEdit} className={onEdit ? "counter__wrap-inner-button counter__wrap-inner-button-active" : "counter__wrap-inner-button"}>{onEdit ? "Принять изменения" : "Редактировать сумму"}</button>
        <span className="counter__wrap-inner-summ">Сумма: {onEdit ? <input maxLength={6} autoFocus onChange={(e) => setInputValue((e.target.value > 100000 && 100000) || (e.target.value < 1000 && 1000) || e.target.value)} onKeyDown={(e) => onChangeSumm(e)} defaultValue={moneyValue} className="counter__wrap-inner-input"></input> : `${moneyValue}`} р</span>
      </div>
      }

    </div>
    {(location.pathname === "/pay" || location.pathname === "/analys–1")
    ?
    <></>
    :
    <p className="counter__wrap-paragraf">
      Внимание! Вносите только достоверную информацию, так как ложные данные могут стать
      причиной для отказа получения средств.
    </p>
    }
  </section>
  );
}

export default Counter;
