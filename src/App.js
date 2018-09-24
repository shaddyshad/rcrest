import React, { Component } from 'react';
import './App.css';

//components
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Values from './components/Values';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Banner/>
          <Values/>
      </div>
    );
  }
}

export default App;
