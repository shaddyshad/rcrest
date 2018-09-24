import React, { Component } from 'react';
import './App.css';

//components
import NavBar from './components/NavBar';
import Banner from './components/Banner'

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Banner/>
      </div>
    );
  }
}

export default App;
