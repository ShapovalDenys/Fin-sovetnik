import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Register.scss';
import MainHeader from '../MainHeader/MainHeader';
import Counter from './Counter';
import FormMain from '../RegisterForm/FormMain';
import Footer from '../Footer/Footer';
import FormSecond from '../RegisterForm/FormSecond';
import Pay from '../RegisterForm/Pay';
import ConfirmPage from '../RegisterForm/СonfirmPage';
import Kabinet from '../Kabinet/Kabinet';
import Login from '../Login/Login';

const Register = () => (
  <section className="register">
    <MainHeader/>
    <Switch>
      <Route path="/register" exact render={() => <><Counter/><FormMain/></>} />
      <Route path="/register2" exact render={() => <><Counter/><FormSecond/></>} />
      <Route path="/pay" exact render={() => <><Counter/><Pay/></>} />
      <Route path="/analys–1" exact render={() => <><Counter/><ConfirmPage/></>} />
      <Route path="/kabinet" exact render={() => <><Kabinet/></>} />
      <Route path="/login" exact render={() => <><Login/></>} />
    </Switch>
    <Footer/>
  </section>
);

export default Register;
