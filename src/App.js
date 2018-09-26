import React, { Component } from 'react';
import './App.css';

//components
// import LandingPage from './components/Landing';
// import Orders from './components/Orders';
import Admin from './components/Admin';
import User from './components/UserDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/*<LandingPage/>*/}
      {/*<Orders/>*/}
      {/*<Admin notifications={12}/>*/}
      <User/>
      </div>
    );
  }
}


export default App;
