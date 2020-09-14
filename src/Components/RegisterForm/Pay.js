import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './Pay.scss';

const Pay = () => {

  const [cvv, setCVV] = useState(0);
  const [cardNumber, setCardNumber] = useState(0);
  const [dateMonth, setDateMonth] = useState(0);
  const [dateYear, setDateYear] = useState(0);
  const history = useHistory();

  const onSubmitPay = (e) => {
    e.preventDefault();
    const DATA = JSON.stringify({
      cvv: cvv,
      cardNumber: cardNumber,
      dateMonthc: dateMonth,
      dateYear: dateYear,
    })
    axios.post('/pay.php', DATA)
    .then(function (response) {
      console.log(response.json())
    })
    .catch(function (error) {
      console.log(error);
    });
    history.push("/analys–1");
  }

  return (
  <form className="pay" onSubmit={(e) => onSubmitPay(e)}>
    <span className="formMain__article pay__article">Активация сервиса</span>

    <p className="pay__main-text">Для продолжения оформления заявки вам необходимо пройти активацию сервиса.</p>

    <iframe src="https://api.fondy.eu/api/checkout/?design_id=61186&merchant_id=1455387&signature=35006d9bf9ebf8e25c7edf467b97705f6b4348d8" width="100%" height="820px" frameBorder="none"></iframe>

    {/*<p className="pay__second-text">Укажите реквизиты вашей карты:</p>*/}

    {/*<div className="pay__cards card">

      <div  className="card__inner-front">
        <input type="text" onChange={(e) => setCardNumber(e.target.value)} className="card__inner-front-input-number" placeholder="Номер карты" minLength={12} maxLength={16} required></input>
        <input type="text" onChange={(e) => setDateMonth(e.target.value)} className="card__inner-front-input-month" placeholder="ММ" minlength={2} maxLength={2} required></input>
        <input type="text" onChange={(e) => setDateYear(e.target.value)} className="card__inner-front-input-year" placeholder="ГГ" minlength={2} maxLength={2} required></input>
      </div>

      <div className="card__inner-back">
        <div className="card__inner-back-line"></div>
        <span className="card__inner-back-cvv">CVC2/CVV2</span>
        <input type="text" onChange={(e) => setCVV(e.target.value)} className="card__inner-back-input" placeholder="XXX" minlength={3} maxLength={3} required></input>
      </div>

    </div>*/}

    {/*<button className="pay__button">Оплатить</button>*/}
    <Link to="/" className="pay__button-reject">Отменить оплату</Link>

    {/*<img className="pay__payments" src="./img/payments.png" alt="payments"></img>*/}

    <p className="pay__disclaimer">
      В системе безопасность платежей и конфиденциальность
      введенной Вами информации обеспечивается использованием
      протокола TLS и другими специальными средствами.
      Ваша конфиденциальная информация хранится исключительно нами и ни
      при каких обстоятельствах не  будет предоставлена третьим лицам за
      исключением случаев, предусмотренных законодательством. В случае
      возникновения вопросов Вы можете обратиться в Службу поддержки
      компании по телефону +38 (050) 22-37-16 или
      электронной почте <a className="pay__disclaimer-link" href="mailto:support@fin-sovet.com">support@fin-sovet.com</a>
    </p>

  </form>
  );
}

export default Pay;
