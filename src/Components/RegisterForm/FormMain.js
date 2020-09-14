import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPassportAccess,
  setMainFormData,
  getMainFormDataName,
  getMainFormDataSurName,
  getMainFormDataPatronymic,
  getMainFormDataEmail,
  getMainFormDataTel,
  getMainFormDataDateValue,
  setRangeStatus,
  getRangeStatusSecond
} from '../Store/Index';
import { useHistory } from 'react-router-dom';

import './FormMain.scss';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import YearMonthForm from './YearMonthForm';

const WEEKDAYS_SHORT = {
  ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
};
const MONTHS = {
  ru: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
};

const WEEKDAYS_LONG = {
  ru: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ],
};

const FIRST_DAY_OF_WEEK = {
  ru: 1,
};
// Translate aria-labels
const LABELS = {
  ru: { nextMonth: 'следующий месяц', previousMonth: 'предыдущий месяц' },
};

const FormMain = () => {

  const [disableButton, setDisableButton] = useState(true);
  const [check, setCheck] = useState(false)

  /*////////////////////////////////////////////// */

  const dispatch = useDispatch();

  /*/////////////////////////////////////////////////*/
  const dataName = useSelector(getMainFormDataName);
  const dataSurName = useSelector(getMainFormDataSurName);
  const dataPatronymic = useSelector(getMainFormDataPatronymic);
  const dataTel = useSelector(getMainFormDataTel);
  const dataEmail = useSelector(getMainFormDataEmail);
  const dataDataValue = useSelector(getMainFormDataDateValue);
  const rangeValueSecondForm = useSelector(getRangeStatusSecond);
  /*/////////////////////////////////////////////////*/

  useEffect(() => {
    if (disableButton) {
      dispatch(setPassportAccess(false));
    } else {
      dispatch(setPassportAccess(true));
    }
  }, [disableButton])

  /*////////////////////////////////////////////// */
  const [rangeValue, setRangeValue] = useState(0);

  const [nameRange, setNameRange] = useState(0);
  const [surNameRange, setSurNameRange] = useState(0);
  const [dateRange, setDateRange] = useState(0);
  const [patronymicRange, setPatronymicRange] = useState(0);
  const [emailRange, setEmailRange] = useState(0);
  const [telRange, setTelRange] = useState(0);

  const [dateValue, setDateValue] = useState(dataDataValue);
  const [name, setName] = useState(dataName);
  const [surName, setSurName] = useState(dataSurName);
  const [patronymic, setPatronymic] = useState(dataPatronymic);
  const [email, setEmail] = useState(dataEmail);
  const [tel, setTel] = useState(dataTel);

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

/*  useEffect(() => {
    if (rangeValue === 35 && !email && check) {
      setDisableButton(false)
    } else if (rangeValue === 42 && check) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [rangeValue, email, check])

  */

 useEffect(() => {
  if (rangeValue === 42 && check) {
    setDisableButton(false)
  } else {
    setDisableButton(true)
  }
}, [rangeValue, email, check])


  /*///////////////////Redirection/////////////////////*/
  const history = useHistory();

  const onClickNextButton = (e) => {
    e.preventDefault();
    if (mailValidation.test(email)) {
      dispatch(setMainFormData(name, surName, patronymic, email, tel, dateValue));
      history.push("/register2");
      dispatch(setRangeStatus(rangeValue));
    } else {
      setErrorMail(true);
      dispatch(setMainFormData(name, surName, patronymic, email, tel, dateValue));
    }
  }

  /*//////////////////Date input///////////////////*/


  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    // eslint-disable-next-line
    setCurrentDate(year + "-" + `${month > 9 ? month : "0" + month}` + "-" + `${day > 9 ? day : "0" + day}`)
  });

  /*///////////////////Mail validation//////////////////////*/

  const mailValidation = /^.+@.+\..+$/igm;
  const [errorMail, setErrorMail] = useState(false);

  /*const onInputMail = (e) => {
    if (mailValidation.test(e.target.value)) {
      setEmail(e.target.value);
      setErrorMail(false);
    } else {
      setErrorMail(true);
    }
  }*/

  /**/
  const regex = /[а-яА-Я-ІіЄє-]+/g;

  const setNameValue = (value) => {
    const found = value.match(regex);
    if (found) {
      setName(found.join(""))
    }
    else {
      setName("")
    }
  }

  const setSurNameValue = (value) => {
    const found = value.match(regex);
    if (found) {
      setSurName(found.join(""))
    }
    else {
      setSurName("")
    }
  }

  const setPatronymicValue = (value) => {
    const found = value.match(regex);
    if (found) {
      setPatronymic(found.join(""))
    }
    else {
      setPatronymic("")
    }
  }

  return (
  <section className="formMain">
    <span className="formMain__article">{rangeValue + rangeValueSecondForm}% вероятность одобрения Вашей заявки</span>

    <div className="formMain__status-bar status-bar">
      <div className="status-bar__line">
        <div className="status-bar__line-inner" style={{ width: `${rangeValue + rangeValueSecondForm}%` }}>
          <div className="status-bar__line-circle"></div>
        </div>
      </div>
    </div>

    <form className="formMain__form">

      <div className="formMain__form-inner">
        <input value={surName} onChange={(e) => setSurNameValue(e.target.value)} className="formMain__form-input" type="surname" placeholder="Фамилия*" required></input>
        <input value={name} onChange={(e) => setNameValue(e.target.value)} className="formMain__form-input" type="name" placeholder="Имя*" required></input>
      </div>

      <div className="formMain__form-inner">
        <input value={patronymic} onChange={(e) => setPatronymicValue(e.target.value)} className="formMain__form-input" type="patronymic" placeholder="Отчество*" required></input>
        {/*<input max={currentDate} min="1900-01-01" defaultValue={dataDataValue} onChange={(e) => setDateValue(e.target.value)} className={dateValue ? "formMain__form-input" :"formMain__form-input formMain__form-input-date"} type="date" placeholder={dateValue ? "" : "Дата рождения*  "} required></input>*/}
        <DayPickerInput dayPickerProps={{
          locale: "ru",
          months: MONTHS["ru"],
          weekdaysLong: WEEKDAYS_LONG["ru"],
          weekdaysShort: WEEKDAYS_SHORT["ru"],
          firstDayOfWeek: FIRST_DAY_OF_WEEK["ru"],
          labels: LABELS["ru"],
          month: new Date(2002, 8),
          fromMonth: new Date(1900, 1),
          toMonth: new Date(2002, 8),
          }}
          placeholder={"Дата рождения*"}
          onDayChange={day => setDateValue(day)} />
      </div>

      <div className="formMain__form-inner">
        {errorMail ? <span className="formMain__error-span">Enter correct email</span> : ""}
        <input defaultValue={dataEmail} onChange={(e) => setEmail(e.target.value)} className="formMain__form-input" type="email" placeholder="Email*" required></input>
        <input defaultValue={dataTel} onChange={(e) => setTel(e.target.value)} className="formMain__form-input" type="tel" placeholder="Телефон*" required></input>
      </div>

      <div className="formMain__checkbox">
        <input onChange={() => setCheck(!check)} className="formMain__checkbox-input" id="check" type="checkbox" ></input>
        <label className="formMain__checkbox-label" htmlFor="check">Даю согласие на <Link to="/Oferta.pdf" className="formMain__checkbox-link">обработку персональных</Link> данных и получение материалов рекламного
          характера, а также с <Link to="/GDPR.pdf" className="formMain__checkbox-link">публичной офертой и документами.</Link></label>
      </div>

      <button onClick={(e) => onClickNextButton(e)} disabled={disableButton} className={disableButton ? "formMain__button disable-button" : "formMain__button"} to="/register2">Продолжить</button>

    </form>

  </section>
  );
}

export default FormMain;
