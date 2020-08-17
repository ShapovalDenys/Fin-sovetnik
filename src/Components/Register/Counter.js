import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getMoneyValue } from '../Store/Index';

import './Counter.scss';

const Counter = () => {
  const moneyValue = useSelector(getMoneyValue);
  /*const [time, setTime] = useState();*/

  return (
  <section className="counter">
    <div className="counter__wrap">

      <div className="counter__wrap-inner">
        <span className="counter__wrap-inner-text">Льготные условия истекают через:</span>
        <span className="counter__wrap-inner-counter">00:12:15</span>
      </div>

      <div className="counter__wrap-inner">
        <span className="counter__wrap-inner-text">Редактировать</span>
        <span className="counter__wrap-inner-summ">Сумма: {moneyValue}р</span>
      </div>

    </div>

    <p className="counter__wrap-paragraf">
      Внимание! Вносите только достоверную информацию, так как ложные данные могут стать
      причиной для отказа получения средств.
    </p>
  </section>
  );
}

export default Counter;
