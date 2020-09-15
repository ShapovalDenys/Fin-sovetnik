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
import DatePicker from 'react-date-picker';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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

  const [isOpen, setIsOpen] = useState(false);

  const [errorPhone, setErrorPhone] = useState(false);
  const [errorPhoneSpan, setErrorPhoneSpan] = useState(false)


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
    if (dateValue && isOpen) {
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
    if (mailValidation.test(email) && errorPhone === false) {
      dispatch(setMainFormData(name, surName, patronymic, email, tel, dateValue));
      history.push("/register2");
      dispatch(setRangeStatus(rangeValue));
    }
    else if (!mailValidation.test(email) && !errorPhone) {
      console.log("error mail");
      setErrorMail(true);
      dispatch(setMainFormData(name, surName, patronymic, email, tel, dateValue));
    }
    else if (errorPhone) {
      console.log("error tel");
      setErrorPhoneSpan(true);
      dispatch(setMainFormData(name, surName, patronymic, email, tel, dateValue));
    }
    if (!errorPhone) {
      setErrorPhoneSpan(false);
    }
    if (mailValidation.test(email)) {
      setErrorMail(false);
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

  let date = new Date();
  date.setFullYear(date.getFullYear()-18, date.getMonth());

  const [timeValue, onChangeTimeValue] = useState(dataDataValue);

  const onChangeTimeValueSet = (e) => {
    onChangeTimeValue(e);
    setDateValue(e)
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
          <label onClick={() => setIsOpen(true)} className="calendar">{isOpen ? "" : "Дата рождения*"}
          {isOpen &&
          <DatePicker
            onChange={onChangeTimeValueSet}
            value={timeValue}
            minDate={new Date(1900, 1)}
            maxDate={date}
          />}</label>
      </div>

      <div className="formMain__form-inner">
        {errorMail ? <span className="formMain__error-span">Введите корректный email</span> : ""}
        <input defaultValue={dataEmail} onChange={(e) => setEmail(e.target.value)} className="formMain__form-input" type="email" placeholder="Email*" required></input>
        {/*<input defaultValue={dataTel} onChange={(e) => setTel(e.target.value)} className="formMain__form-input" type="tel" placeholder="Телефон*" required></input>*/}
        <div className="phoneInput-div">
        {errorPhoneSpan ? <span className="formMain__error-span">Введите корректный телефон</span> : ""}
        <PhoneInput
          containerClass="phoneInput"
          inputClass={!errorPhone && "phoneInput-inner"}
          placeholder={"Телефон*"}
          onlyCountries={["ua"]}
          country={'ua'}
          value={tel}
          onChange={phone => setTel(phone)}
          isValid={(value) => {
            if (value.match(/((\+)?\b(8|38)?(0[\d]{2}))([\d-]{5,8})([\d]{2})/)) {
              setErrorPhone(false);
            } else {
              setErrorPhone(true);
            }
          }}
        />
        </div>
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
