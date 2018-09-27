import React, {Component} from 'react';
import './App.css';

import {
    Switch, Route
} from 'react-router-dom';


//components
import LandingPage from './components/Landing';
import Orders from './components/Orders';
import Admin from './components/Admin';
import User from './components/UserDashboard';
import ResetForm from './components/Common/ResetPassword';

import withAuthentication from './components/withAuthentication';

class App extends Component {
    render() {
        const Account = (<User/>);
        return (

            <div className="App">
                <Switch>
                    <Route path='/orders' component={Orders}/>
                    <Route exact path='/sadmin' component={Admin}/>
                    <Route path='/account/:id' children={Account}/>
                    <Route path='/reset' component={ResetForm}/>
                    <Route exact path='/' component={LandingPage}/>
                </Switch>
            </div>
        );
    }
}


export default withAuthentication(App);
