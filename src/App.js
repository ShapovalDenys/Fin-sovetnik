import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import Index from './Components/Index/Index';
import './css-reset.scss';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/index" exact component={Index} />
      <Redirect to="index/"/>
    </Switch>
  </div>
);

export default App;
