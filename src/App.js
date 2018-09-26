import React, { Component } from 'react';
import './App.css';

import {
    Switch, Route
} from 'react-router-dom';

//components
import LandingPage from './components/Landing';
import Orders from './components/Orders';
import Admin from './components/Admin';
import User from './components/UserDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
          <Route path='/orders' component={Orders}/>
          <Route exact path='/sadmin' component={Admin}/>
          <Route path='/users/:sessid' component={User}/>
          <Route path='/' component={LandingPage}/>
      </Switch>
      </div>
    );
  }
}


export default App;
