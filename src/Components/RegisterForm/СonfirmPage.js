import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './ConfirmPage.scss';

const ConfirmPage = () => {

const [range, setRange] = useState(0);
const history = useHistory();

useEffect(() => {
  const interval = setInterval(() => {
    setRange(range => range + 1);
  }, 100);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  if (range === 100) {
    history.push("/kabinet");
  }
}, [range])


  return (
  <section className="confirmPage">

    <span className="confirmPage__article">Заявка на получение</span>

    <p className="pay__main-text">Проверка данных</p>

    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

    <div className="formMain__status-bar status-bar">
      <div className="status-bar__line">
        <div className="status-bar__line-inner" style={{ width: `${range <= 100 ? range : 100}%` }}>
          <div className="status-bar__line-circle"></div>
        </div>
      </div>

      <div className="confirmPage__inner">

        <div className="confirmPage__inner-points">
          {range > 9 ? <span className="confirmPage__span-ok">Номер телефона..............OK</span> : <span className="confirmPage__span-nonOk">Номер телефона..............</span>}
          {range > 19 ? <span className="confirmPage__span-ok">Действительный..............OK</span> : <span className="confirmPage__span-nonOk">Действительный..............</span>}
          {range > 29 ? <span className="confirmPage__span-ok">Упоминания в БКИ.........OK</span> : <span className="confirmPage__span-nonOk">Упоминания в БКИ.........</span>}
        </div>

        <div className="confirmPage__inner-points">
          {range > 39 ? <span className="confirmPage__span-ok">Ф.И.О.....................................OK</span> : <span className="confirmPage__span-nonOk">Ф.И.О..................................</span>}
          {range > 49 ? <span className="confirmPage__span-ok">Дата рождения.................OK</span> : <span className="confirmPage__span-nonOk">Дата рождения..............</span>}
          {range > 59 ? <span className="confirmPage__span-ok">Номер паспорта...............OK</span> : <span className="confirmPage__span-nonOk">Номер паспорта............</span>}
        </div>

        <div className="confirmPage__inner-points">
          {range > 69 ? <span className="confirmPage__span-ok">Просрочка..........................OK</span> : <span className="confirmPage__span-nonOk">Просрочка........................</span>}
          {range > 79 ? <span className="confirmPage__span-ok">Кредитный лимит............OK</span> : <span className="confirmPage__span-nonOk">Кредитный лимит..........</span>}
          {range > 89 ? <span className="confirmPage__span-ok">Запросы в БКИ.................OK</span> : <span className="confirmPage__span-nonOk">Запросы в БКИ................</span>}
        </div>

      </div>

    </div>

  </section>
  );
}

export default ConfirmPage;
