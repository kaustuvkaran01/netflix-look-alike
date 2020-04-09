import React, { Component } from 'react';
import './App.css';
import Main from './pages/Main';
import Login from "./pages/Login";
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path ="/" component = { Main } />
        <Route path ="/login" component = { Login } />
      </Switch>
    );
  }
}

export default App;
