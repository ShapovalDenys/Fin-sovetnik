import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Register.scss';
import MainHeader from '../MainHeader/MainHeader';
import Counter from './Counter';
import FormMain from '../RegisterForm/FormMain';
import Footer from '../Footer/Footer';

const Register = () => (
  <section className="register">
    <MainHeader/>
    <Switch>
      <Route path="/register" render={() => <><Counter/><FormMain/></>} />
      <Route path="/register2" exact component={Counter} />
    </Switch>
    <Footer/>
  </section>
);

export default Register;
