import React from 'react';

import './Description.scss';

const Description = () => (
  <section className="description">
    <h3 className="description__article">О НАС:</h3>
    <img className="description__image" src="./img/verh.png" alt="rerh"></img>
    <p className="description__text">
      Сервис подбора займов FinSovetnik, оставьте заявку на получение денег: работаем со всеми клиентами — не важно, какая у вас кредитная история и имеются ли текущие просрочки.*
    </p>
  </section>
);

export default Description;
