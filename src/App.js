import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import Index from './Components/Index/Index';
import './css-reset.scss';
import Register from './Components/Register/Register';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/index" exact component={Index} />
      <Route path="/register" exact component={Register} />
      <Route path="/register2" exact component={Register} />
      <Redirect to="index/"/>
    </Switch>
  </div>
);

export default App;
