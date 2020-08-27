import React from 'react';
import { Link } from 'react-router-dom';

import './MethodsCards.scss';

const MethodsCards = () => (
  <section className="methodsCards">
    <h3 className="methodsCards__article">Как получить деньги?</h3>
    <div className="methodsCards__cards">

      <div className="methodsCards__card">
        <img src="./img/stopwatch.png" alt="stopwatch"></img>
        <span>У Вас это займет не больше 10-ти минут.</span>
      </div>

      <div className="methodsCards__card">
        <img src="./img/des.png" alt="des"></img>
        <span>Выберите необходимую сумму займа и укажите ваши персональные данные.</span>
      </div>

      <div className="methodsCards__card">
        <img src="./img/guarantee.png" alt="guarantee"></img>
        <span>Получите займ с гарантированным одобрением любым удобным способом.</span>
      </div>

    </div>

    <a className="money__block-button" href="#money">Получить деньги</a>

  </section>
);

export default MethodsCards;
