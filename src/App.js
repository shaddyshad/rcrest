import React, { Component } from 'react';
import './App.css';

//components
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Values from './components/Values';
import ProcessList from './components/ProcessList';
import CTA from './components/CallToAction';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Banner/>
          <Values/>
          <ProcessList/>
          <CTA/>
      </div>
    );
  }
}


export default App;
