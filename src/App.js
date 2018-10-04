import React, {Component} from 'react';
import './App.css';

import Screen from "./components/screens";
import Loader from "./components/shared/loader";
import {fetchAndUpdateOrders} from "./actions/orders";
import {connect} from "react-redux";

class App extends Component {
    componentDidMount(){
        this.props.refreshOrders();
    }
    render() {
        return (

            <div className="App">
                {this.props.isLoading ? <Loader/> : <Screen/>}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        refreshOrders: () => dispatch(fetchAndUpdateOrders())
    }
};

export default connect(null, mapDispatchToProps)(App);
