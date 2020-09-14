import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './FormSecond.scss';
import {
  getRangeStatus,
  setRangeStatusSecond,
  setSecondFormData,
  getSecondFormPassport,
  getSecondFormPassportDate,
  getSecondFormPassportPlaceOrgan,
  getSecondFormPassportPlace,
  getSecondFormRegion,
  getSecondStreet,
  getSecondFormBody,
  getSecondFormCity,
  getSecondFormBuild,
  getSecondFormFlat,
  getSecondFormInn,
  getSecondFormCreditTerm,
  getMainFormDataName,
  getMainFormDataSurName,
  getMainFormDataPatronymic,
  getMainFormDataEmail,
  getMainFormDataTel,
  getMainFormDataDateValue,
  setPayAccess,
} from '../Store/Index';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-date-picker';

const FormSecond = () => {
  const rangeValue = useSelector(getRangeStatus);
  const [rangeSecondValue, setRangeSecondValue] = useState(0);


  /*/////////////////////////////////////////////////*/
    const dataPassport = useSelector(getSecondFormPassport);
    const dataPassportDate = useSelector(getSecondFormPassportDate);
    const dataPassportPlaceOrgan = useSelector(getSecondFormPassportPlaceOrgan);
    const dataPassportPlace = useSelector(getSecondFormPassportPlace);
    const dataFormRegion= useSelector(getSecondFormRegion);
    const dataStreet = useSelector(getSecondStreet);
    const dataBody = useSelector(getSecondFormBody);
    const dataCity = useSelector(getSecondFormCity);
    const dataBuild= useSelector(getSecondFormBuild);
    const dataFlat = useSelector(getSecondFormFlat);
    const dataInn = useSelector(getSecondFormInn);
    const dataCreditValue = useSelector(getSecondFormCreditTerm);
    const dataName = useSelector(getMainFormDataName);
    const dataSurName = useSelector(getMainFormDataSurName);
    const dataPatronymic = useSelector(getMainFormDataPatronymic);
    const dataTel = useSelector(getMainFormDataTel);
    const dataEmail = useSelector(getMainFormDataEmail);
    const dataDataValue = useSelector(getMainFormDataDateValue);
  /*/////////////////////////////////////////////////*/

  const [passport, setPassport] = useState(dataPassport);
  const [passportDate, setPassportDate] = useState(dataPassportDate);
  const [passportPlaceOrgan, setPassportPlaceOrgan] = useState(dataPassportPlaceOrgan);
  const [passportPlace, setPassportPlace] = useState(dataPassportPlace);

  const [inn, setInn] = useState(dataInn);
  const [creditValue, setCreditValue] = useState(dataCreditValue);

  const [region, setRegion] = useState(dataFormRegion);
  const [street, setStreet] = useState(dataStreet);
  const [body, setBody] = useState(dataBody);

  const [city, setCity] = useState(dataCity);
  const [build, setBuild] = useState(dataBuild);
  const [flat, setFlat] = useState(dataFlat);

  const [checkAdress, setCheckAdress] = useState(false);

  const [secondRegion, setSecondRegion] = useState("");
  const [secondStreet, setSecondStreet] = useState("");
  const [secondBody, setSecondBody] = useState("");

  const [secondCity, setSecondCity] = useState("");
  const [secondBuild, setSecondBuild] = useState("");
  const [secondFlat, setSecondFlat] = useState("");

  /*//////////////////////////////////*/

  const [rangeValueSecondForm, setRangeValueSecondForm] = useState(0);

  const [passportRange, setPassportRange] = useState(0);
  const [passportDateRange, setPassportDateRange] = useState(0);
  const [passportPlaceOrganRange, setPassportPlaceOrganRange] = useState(0);
  const [passportPlaceRange, setPassportPlaceRange] = useState(0);

  const [innRange, setInnRange] = useState(0);

  const [regionRange, setRegionRange] = useState("");
  const [streetRange, setStreetRange] = useState("");
  const [bodyRange, setBodyRange] = useState("");

  const [cityRange, setCityRange] = useState("");
  const [buildRange, setBuildRange] = useState("");
  const [flatRange, setFlatRange] = useState("");

  useEffect(() => {
    if (passport) {
      setPassportRange(5)
    } else {
      setPassportRange(0)
    }
  }, [passport])

  useEffect(() => {
    if (inn) {
      setInnRange(6)
    } else {
      setInnRange(0)
    }
  }, [inn])

  useEffect(() => {
    if (passportDate) {
      setPassportDateRange(5)
    } else {
      setPassportDateRange(0)
    }
  }, [passportDate])

  useEffect(() => {
    if (passportPlaceOrgan) {
      setPassportPlaceOrganRange(5)
    } else {
      setPassportPlaceOrganRange(0)
    }
  }, [passportPlaceOrgan])

  useEffect(() => {
    if (passportPlace) {
      setPassportPlaceRange(7)
    } else {
      setPassportPlaceRange(0)
    }
  }, [passportPlace])

  useEffect(() => {
    if (region) {
      setRegionRange(5)
    } else {
      setRegionRange(0)
    }
  }, [region])

  useEffect(() => {
    if (street) {
      setStreetRange(5)
    } else {
      setStreetRange(0)
    }
  }, [street])

  useEffect(() => {
    if (body) {
      setBodyRange(5)
    } else {
      setBodyRange(0)
    }
  }, [body])

  useEffect(() => {
    if (city) {
      setCityRange(5)
    } else {
      setCityRange(0)
    }
  }, [city])

  useEffect(() => {
    if (build) {
      setBuildRange(5)
    } else {
      setBuildRange(0)
    }
  }, [build])

  useEffect(() => {
    if (flat) {
      setFlatRange(5)
    } else {
      setFlatRange(0)
    }
  }, [flat])


  useEffect(() => {
    setRangeValueSecondForm(passportRange + passportDateRange + passportPlaceOrganRange + passportPlaceRange + regionRange + streetRange + bodyRange + cityRange + buildRange + flatRange + innRange)
  }, [passportRange, passportDateRange, passportPlaceOrganRange, passportPlaceRange, regionRange, streetRange, bodyRange, cityRange, buildRange, flatRange, innRange])


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRangeStatusSecond(rangeValueSecondForm))
  }, [rangeValueSecondForm])

  /*//////////////////////////////////////*/

  useEffect(() => {
    dispatch(setSecondFormData(passport, passportDate, passportPlaceOrgan, passportPlace, region, street, body, city, city, flat, inn, creditValue))
  }, [passport, passportDate, passportPlaceOrgan, passportPlace, region, street, body, city, city, flat, inn, creditValue])


  const history = useHistory();

  const onSubmit = () => {
    const DATA = JSON.stringify({
      dataName: dataName,
      dataSurName: dataSurName,
      dataPatronymic: dataPatronymic,
      dataTel: dataTel,
      dataEmail: dataEmail,
      dataDataValue: dataDataValue,
      dataPassport: dataPassport,
      dataPassportDate: dataPassportDate,
      dataPassportPlaceOrgan: dataPassportPlaceOrgan,
      dataPassportPlace: dataPassportPlace,
      dataFormRegion: dataFormRegion,
      dataStreet: dataStreet,
      dataBody: dataBody,
      dataCity: dataCity,
      dataBuild: dataBuild,
      dataFlat: dataFlat,
      dataInn: dataInn,
      dataCredit: dataCreditValue,
    })
    localStorage.setItem('Data', DATA);
    axios.post('/register.php', DATA)
    .then(function (response) {
      console.log(response.json())
    })
    .catch(function (error) {
      console.log(error);
    });
    dispatch(setPayAccess(true));
    history.push("/pay");
  }

  /*console.log(JSON.parse(localStorage.getItem('Data')));*/
  /*/////////////////////////////////////////*/
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    // eslint-disable-next-line
    setCurrentDate(year + "-" + `${month > 9 ? month : "0" + month}` + "-" + `${day > 9 ? day : "0" + day}`)
  });



  const currentYear = new Date().getFullYear();
  const [timeValue, onChangeTimeValue] = useState("");

  const onChangeTimeValueSet = (e) => {
    onChangeTimeValue(e);
    setPassportDate(e)
  }
/*///////////////////////*/

  const onChangeSelect = (value) => {
    setCreditValue(value)
  }

/*///////////////////////*/
  return (
  <section className="formSecond">
    <span className="formMain__article">{rangeValueSecondForm + rangeValue}% вероятность одобрения Вашей заявки</span>

    <div className="formMain__status-bar status-bar">
      <div className="status-bar__line">
        <div className="status-bar__line-inner" style={{ width: `${rangeValueSecondForm + rangeValue}%` }}>
          <div className="status-bar__line-circle"></div>
        </div>
      </div>
    </div>

    <form className="formSecond__form">

      <div className="formSecond__form-pasportData">
        <input type="text" defaultValue={passport} onChange={(e) => setPassport(e.target.value)} placeholder="Серия и номер паспорта*" className="formSecond__form-pasportData-input" required></input>
        <DatePicker
            className="calendar-passport"
            onChange={onChangeTimeValueSet}
            value={timeValue}
            minDate={new Date(1900, 1)}
            maxDate={new Date(currentYear - 14, 1)}
            yearPlaceholder="гггг"
            monthPlaceholder="мм"
            dayPlaceholder="Дата выдачи* дд"
          />
        {/*<input max={currentDate} min="1900-01-01" defaultValue={passportDate} onChange={(e) => setPassportDate(e.target.value)} type="date" placeholder={passportDate ? "" : "Дата выдачи*"} className={passportDate ? "formSecond__form-pasportData-input" : "formSecond__form-pasportData-input formMain__form-input-date"} required></input>*/}
        {/*<input defaultValue={passportDate} onChange={(e) => setPassportDate(e.target.value)} placeholder="Дата выдачи*" className="formSecond__form-pasportData-input" required></input>*/}
        <input type="text" defaultValue={passportPlaceOrgan} onChange={(e) => setPassportPlaceOrgan(e.target.value)} placeholder="Код органа, выдающего документ*" className="formSecond__form-pasportData-input" required></input>
      </div>

      <input type="text" defaultValue={passportPlace} onChange={(e) => setPassportPlace(e.target.value)}  placeholder="Кем выдан*" className="formSecond__form-pasportData-input formSecond__form-pasportData-input-pass" required></input>
      <input type="number" defaultValue={inn} onChange={(e) => setInn(e.target.value)} placeholder="ИНН*" className="formSecond__form-pasportData-input formSecond__form-pasportData-input-pass" required></input>
      <label htmlFor="select">Выберите срок кредитования
      <select onChange={(e) => onChangeSelect(e.target.value)} id="select" value={creditValue} className="select-form formSecond__form-pasportData-input formSecond__form-pasportData-input-pass">
        <option value="3 месяца">3 месяца</option>
        <option value="6 месяцев">6 месяцев</option>
        <option value="9 месяцев">9 месяцев</option>
        <option value="12 месяцев">12 месяцев</option>
      </select></label>
    </form>

    <span className="formMain__article formSecond__article">Адрес регистрации</span>

    <form className="formSecond__form-adress">

      <div className="formSecond__form-adress-inner">
        <input type="text" defaultValue={region} onChange={(e) => setRegion(e.target.value)} placeholder="Регион*" className="formSecond__form-adress-inner-input" required></input>
        <input type="text" defaultValue={street} onChange={(e) => setStreet(e.target.value)} placeholder="Улица*" className="formSecond__form-adress-inner-input" required></input>
        <input type="text" defaultValue={body} onChange={(e) => setBody(e.target.value)} placeholder="Строение/Корпус" className="formSecond__form-adress-inner-input"></input>
      </div>

      <div className="formSecond__form-adress-inner">
        <input type="text" defaultValue={city} onChange={(e) => setCity(e.target.value)} placeholder="Город*"  className="formSecond__form-adress-inner-input"  required></input>
        <input type="number" defaultValue={build} onChange={(e) => setBuild(e.target.value)} placeholder="Дом*" className="formSecond__form-adress-inner-input"  required></input>
        <input type="number" defaultValue={flat} onChange={(e) => setFlat(e.target.value)}placeholder="Квартира*"  className="formSecond__form-adress-inner-input"  required></input>
      </div>

    </form>

    <div className="formMain__checkbox formSecond__checkbox">
      <input onChange={() => setCheckAdress(!checkAdress)} className="formMain__checkbox-input" id="check" type="checkbox" ></input>
      <label className="formMain__checkbox-label" htmlFor="check">Мой адрес регистрации <span className="formSecond__checkbox-span">НЕ</span> совпадает с адресом регистрации</label>
    </div>

    <span className="formMain__article formSecond__article">Адрес регистрации</span>

    <form className="formSecond__form-adress">

      <div className="formSecond__form-adress-inner">
        <input type="text" value={!checkAdress ? region : secondRegion} onChange={(e) => setSecondRegion(e.target.value)} placeholder="Регион*" className={checkAdress ? "formSecond__form-adress-inner-input" : "formSecond__form-adress-inner-input formSecond__form-adress-inner-input  formSecond__form-adress-inner-input-disable"} required></input>
        <input type="text" value={!checkAdress ? street : secondStreet} onChange={(e) => setSecondStreet(e.target.value)} placeholder="Улица*" className={checkAdress ? "formSecond__form-adress-inner-input" : "formSecond__form-adress-inner-input formSecond__form-adress-inner-input  formSecond__form-adress-inner-input-disable"} required></input>
        <input type="text" value={!checkAdress ? body : secondBody} onChange={(e) => setSecondBody(e.target.value)} placeholder="Строение/Корпус" className={checkAdress ? "formSecond__form-adress-inner-input" : "formSecond__form-adress-inner-input formSecond__form-adress-inner-input  formSecond__form-adress-inner-input-disable"}></input>
      </div>

      <div className="formSecond__form-adress-inner">
        <input type="text" value={!checkAdress ? city : secondCity} onChange={(e) => setSecondCity(e.target.value)} placeholder="Город*"  className={checkAdress ? "formSecond__form-adress-inner-input" : "formSecond__form-adress-inner-input formSecond__form-adress-inner-input  formSecond__form-adress-inner-input-disable"}  required></input>
        <input type="number" value={!checkAdress ? build : secondBuild} onChange={(e) => setSecondBuild(e.target.value)} placeholder="Дом*" className={checkAdress ? "formSecond__form-adress-inner-input" : "formSecond__form-adress-inner-input formSecond__form-adress-inner-input  formSecond__form-adress-inner-input-disable"}  required></input>
        <input type="number" value={!checkAdress ? flat : secondFlat} onChange={(e) => setSecondFlat(e.target.value)} placeholder="Квартира*"  className={checkAdress ? "formSecond__form-adress-inner-input" : "formSecond__form-adress-inner-input formSecond__form-adress-inner-input  formSecond__form-adress-inner-input-disable"}  required></input>
      </div>

    </form>

    <button disabled={(rangeValueSecondForm === 58 || (rangeValueSecondForm === 53 && body === "")) ? false : true} onClick={() => onSubmit()} className={(rangeValueSecondForm === 58 || (rangeValueSecondForm === 53 && body === "")) ? "formMain__button" : "formMain__button  disable-button"}>Продолжить</button>

  </section>
  );
}

export default FormSecond;
