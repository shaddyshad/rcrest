import React, {Component} from 'react';
import './App.css';

import Screen from "./components/screens";
import Loader from "./components/shared/Loader";

class App extends Component {
    render() {
        return (

            <div className="App">
                {this.props.isLoading ? <Loader/> : <Screen/>}
            </div>
        );
    }
}



export default App;
