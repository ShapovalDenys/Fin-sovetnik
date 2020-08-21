import React, { useState } from 'react';

import './Login.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [num, setNum] = useState(0);
  const [pass, setPass] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault()
    const DATA = JSON.stringify({
      num: num,
      pass: pass,
    })
    axios.post('/login.php', DATA)
    .then(function (response) {
      console.log(response.json())
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
  <section className="login">
    <h4 className="login__article">Вход в Личный кабинет</h4>
    <Link className="login__link">Я не зарегистрирован</Link>

    <form onSubmit={(e) => onSubmit(e)} className="login__form">

      <div className="login__form-inner">
        <input onChange={(e) => setNum(e.target.value)} className="login__form-input" type="number" placeholder="Номер телефона"></input>
        <input onChange={(e) => setPass(e.target.value)} className="login__form-input" type="password" placeholder="Пароль"></input>
      </div>

      <button className="login__form-button">Войти</button>
    </form>

    <img className="login__picture" src="./img/lamp-2.png" alt="lamp"></img>

  </section>
  );
}

export default Login;
