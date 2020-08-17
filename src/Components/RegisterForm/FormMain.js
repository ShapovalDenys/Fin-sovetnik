import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './FormMain.scss';

const FormMain = () => {

  const [disableButton, setDisableButton] = useState(true);
  const [check, setCheck] = useState(false)

  /*//////////////////////////////////////////////*/
  const [rangeValue, setRangeValue] = useState(0);

  const [nameRange, setNameRange] = useState(0);
  const [surNameRange, setSurNameRange] = useState(0);
  const [dateRange, setDateRange] = useState(0);
  const [patronymicRange, setPatronymicRange] = useState(0);
  const [emailRange, setEmailRange] = useState(0);
  const [telRange, setTelRange] = useState(0);

  const [dateValue, setDateValue] = useState();
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  useEffect(() => {
    if (name) {
      setNameRange(7)
    } else {
      setNameRange(0)
    }
  }, [name])

  useEffect(() => {
    if (surName) {
      setSurNameRange(7)
    } else {
      setSurNameRange(0)
    }
  }, [surName])

  useEffect(() => {
    if (patronymic) {
      setPatronymicRange(7)
    } else {
      setPatronymicRange(0)
    }
  }, [patronymic])

  useEffect(() => {
    if (dateValue) {
      setDateRange(7)
    } else {
      setDateRange(0)
    }
  }, [dateValue])

  useEffect(() => {
    if (email) {
      setEmailRange(7)
    } else {
      setEmailRange(0)
    }
  }, [email])

  useEffect(() => {
    if (tel) {
      setTelRange(7)
    } else {
      setTelRange(0)
    }
  }, [tel])

  useEffect(() => {
    setRangeValue(nameRange + surNameRange + dateRange + patronymicRange + emailRange + telRange)
  }, [nameRange, surNameRange, dateRange, patronymicRange, emailRange, telRange])


  /*////////////////////////////////////////////*/

  useEffect(() => {
    if (rangeValue === 35 && !email && check) {
      setDisableButton(false)
    } else if (rangeValue === 42 && check) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [rangeValue, email, check])


  return (
  <section className="formMain">
    <span className="formMain__article">{rangeValue}% вероятность одобрения Вашей заявки</span>

    <div className="formMain__status-bar status-bar">
      <div className="status-bar__line">
        <div className="status-bar__line-inner" style={{ width: `${rangeValue}%` }}>
          <div className="status-bar__line-circle"></div>
        </div>
      </div>
    </div>

    <form className="formMain__form">

      <div className="formMain__form-inner">
        <input onChange={(e) => setSurName(e.target.value)} className="formMain__form-input" type="surname" placeholder="Фамилия*" required></input>
        <input onChange={(e) => setName(e.target.value)} className="formMain__form-input" type="name" placeholder="Имя*" required></input>
      </div>

      <div className="formMain__form-inner">
        <input onChange={(e) => setPatronymic(e.target.value)} className="formMain__form-input" type="patronymic" placeholder="Отчество*" required></input>
        <input onChange={(e) => setDateValue(e.target.value)} className={dateValue ? "formMain__form-input" :"formMain__form-input formMain__form-input-date"} type="date" placeholder={dateValue ? "" : "Дата рождения*"} required></input>
      </div>

      <div className="formMain__form-inner">
        <input onChange={(e) => setEmail(e.target.value)} className="formMain__form-input" type="email" placeholder="Email" required></input>
        <input onChange={(e) => setTel(e.target.value)} className="formMain__form-input" type="tel" placeholder="Телефон*" required></input>
      </div>

      <div className="formMain__checkbox">
        <input onChange={() => setCheck(!check)} className="formMain__checkbox-input" id="check" type="checkbox" ></input>
        <label className="formMain__checkbox-label" htmlFor="check">Даю согласие на <Link to="/" className="formMain__checkbox-link">обработку персональных</Link> данных и получение материалов рекламного
          характера, а также с <Link to="/" className="formMain__checkbox-link">публичной офертой и документами.</Link></label>
      </div>

      <button disabled={disableButton} className={disableButton ? "formMain__button disable-button" : "formMain__button"} to="/register2">Продолжить</button>

    </form>

  </section>
  );
}

export default FormMain;
