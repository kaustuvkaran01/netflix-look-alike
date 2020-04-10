import React, { Component } from 'react';
import './App.css';
import Main from './pages/Main';
import Login from "./pages/Login";
import { Switch, Route } from 'react-router-dom';
import ChoosePlan from './pages/ChoosePlan';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path ="/" component = { Main } />
        <Route path ="/login" component = { Login } />
        <Route path = "/choose-plan" component = { ChoosePlan } />
      </Switch>
    );
  }
}

export default App;
