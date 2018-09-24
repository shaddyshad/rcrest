import React, { Component } from 'react';
import './App.css';

//components
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Values from './components/Values';
import ProcessList from './components/ProcessList'

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Banner/>
          <Values/>
          <ProcessList/>
      </div>
    );
  }
}

export default App;
