import React, { Component } from 'react';
import './App.css';
import Main from './pages/Main';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path ="/" component = { Main } />
      </Switch>
    );
  }
}

export default App;
