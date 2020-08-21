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
  getMainFormDataName,
  getMainFormDataSurName,
  getMainFormDataPatronymic,
  getMainFormDataEmail,
  getMainFormDataTel,
  getMainFormDataDateValue,
  setPayAccess,
} from '../Store/Index';
import { useSelector, useDispatch } from 'react-redux';

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

  const [regionRange, setRegionRange] = useState("");
  const [streetRange, setStreetRange] = useState("");
  const [bodyRange, setBodyRange] = useState("");

  const [cityRange, setCityRange] = useState("");
  const [buildRange, setBuildRange] = useState("");
  const [flatRange, setFlatRange] = useState("");

  useEffect(() => {
    if (passport) {
      setPassportRange(7)
    } else {
      setPassportRange(0)
    }
  }, [passport])

  useEffect(() => {
    if (passportDate) {
      setPassportDateRange(7)
    } else {
      setPassportDateRange(0)
    }
  }, [passportDate])

  useEffect(() => {
    if (passportPlaceOrgan) {
      setPassportPlaceOrganRange(7)
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
    setRangeValueSecondForm(passportRange + passportDateRange + passportPlaceOrganRange + passportPlaceRange + regionRange + streetRange + bodyRange + cityRange + buildRange + flatRange)
  }, [passportRange, passportDateRange, passportPlaceOrganRange, passportPlaceRange, regionRange, streetRange, bodyRange, cityRange, buildRange, flatRange])


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRangeStatusSecond(rangeValueSecondForm))
  }, [rangeValueSecondForm])

  /*//////////////////////////////////////*/

  useEffect(() => {
    dispatch(setSecondFormData(passport, passportDate, passportPlaceOrgan, passportPlace, region, street, body, city, city, flat))
  }, [passport, passportDate, passportPlaceOrgan, passportPlace, region, street, body, city, city, flat])


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
    })
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
        <input defaultValue={passport} onChange={(e) => setPassport(e.target.value)} placeholder="Серия и номер паспорта*" className="formSecond__form-pasportData-input" required></input>
        <input defaultValue={passportDate} onChange={(e) => setPassportDate(e.target.value)} placeholder="Дата выдачи*" className="formSecond__form-pasportData-input" required></input>
        <input defaultValue={passportPlaceOrgan} onChange={(e) => setPassportPlaceOrgan(e.target.value)} placeholder="Код органа, выдающего документ*" className="formSecond__form-pasportData-input" required></input>
      </div>

      <input defaultValue={passportPlace} onChange={(e) => setPassportPlace(e.target.value)}  placeholder="Кем выдан*" className="formSecond__form-pasportData-input formSecond__form-pasportData-input-pass" required></input>

    </form>

    <span className="formMain__article formSecond__article">Адрес регистрации</span>

    <form className="formSecond__form-adress">

      <div className="formSecond__form-adress-inner">
        <input defaultValue={region} onChange={(e) => setRegion(e.target.value)} placeholder="Регион*" className="formSecond__form-adress-inner-input" required></input>
        <input defaultValue={street} onChange={(e) => setStreet(e.target.value)} placeholder="Улица*" className="formSecond__form-adress-inner-input" required></input>
        <input defaultValue={body} onChange={(e) => setBody(e.target.value)} placeholder="Строение/Корпус*" className="formSecond__form-adress-inner-input" required></input>
      </div>

      <div className="formSecond__form-adress-inner">
        <input defaultValue={city} onChange={(e) => setCity(e.target.value)} placeholder="Город*"  className="formSecond__form-adress-inner-input"  required></input>
        <input defaultValue={build} onChange={(e) => setBuild(e.target.value)} placeholder="Дом*" className="formSecond__form-adress-inner-input"  required></input>
        <input defaultValue={flat} onChange={(e) => setFlat(e.target.value)}placeholder="Квартира*"  className="formSecond__form-adress-inner-input"  required></input>
      </div>

    </form>

    <div className="formMain__checkbox formSecond__checkbox">
      <input onChange={() => setCheckAdress(!checkAdress)} className="formMain__checkbox-input" id="check" type="checkbox" ></input>
      <label className="formMain__checkbox-label" htmlFor="check">Мой адрес регистрации <span className="formSecond__checkbox-span">НЕ</span> совпадает с адресом регистрации</label>
    </div>

    <span className="formMain__article formSecond__article">Адрес регистрации</span>

    <form className="formSecond__form-adress">

      <div className="formSecond__form-adress-inner">
        <input value={!checkAdress ? region : secondRegion} onChange={(e) => setSecondRegion(e.target.value)} placeholder="Регион*" className={checkAdress ? "formSecond__form-adress-inner-input" : "formSecond__form-adress-inner-input formSecond__form-adress-inner-input  formSecond__form-adress-inner-input-disable"} required></input>
        <input value={!checkAdress ? street : secondStreet} onChange={(e) => setSecondStreet(e.target.value)} placeholder="Улица*" className={checkAdress ? "formSecond__form-adress-inner-input" : "formSecond__form-adress-inner-input formSecond__form-adress-inner-input  formSecond__form-adress-inner-input-disable"} required></input>
        <input value={!checkAdress ? body : secondBody} onChange={(e) => setSecondBody(e.target.value)} placeholder="Строение/Корпус*" className={checkAdress ? "formSecond__form-adress-inner-input" : "formSecond__form-adress-inner-input formSecond__form-adress-inner-input  formSecond__form-adress-inner-input-disable"} required></input>
      </div>

      <div className="formSecond__form-adress-inner">
        <input value={!checkAdress ? city : secondCity} onChange={(e) => setSecondCity(e.target.value)} placeholder="Город*"  className={checkAdress ? "formSecond__form-adress-inner-input" : "formSecond__form-adress-inner-input formSecond__form-adress-inner-input  formSecond__form-adress-inner-input-disable"}  required></input>
        <input value={!checkAdress ? build : secondBuild} onChange={(e) => setSecondBuild(e.target.value)} placeholder="Дом*" className={checkAdress ? "formSecond__form-adress-inner-input" : "formSecond__form-adress-inner-input formSecond__form-adress-inner-input  formSecond__form-adress-inner-input-disable"}  required></input>
        <input value={!checkAdress ? flat : secondFlat} onChange={(e) => setSecondFlat(e.target.value)} placeholder="Квартира*"  className={checkAdress ? "formSecond__form-adress-inner-input" : "formSecond__form-adress-inner-input formSecond__form-adress-inner-input  formSecond__form-adress-inner-input-disable"}  required></input>
      </div>

    </form>

    <button disabled={rangeValueSecondForm === 58 ? false : true} onClick={() => onSubmit()} className={rangeValueSecondForm === 58 ? "formMain__button" : "formMain__button  disable-button"}>Продолжить</button>

  </section>
  );
}

export default FormSecond;
