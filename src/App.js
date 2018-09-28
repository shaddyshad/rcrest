import React, {Component} from 'react';
import './App.css';

import {
    Switch, Route,withRouter
} from 'react-router-dom';


//components
import LandingPage from './components/Landing';
import Orders from './components/Orders';
import Admin from './components/Admin';
import User from './components/UserDashboard';
import ResetForm from './components/Common/ResetPassword';

import withAuthentication from './components/withAuthentication';

import {connect} from 'react-redux';

class App extends Component {
    componentDidMount(){
        const {activePath, history} = this.props;
        history.push(activePath);
    }

    render() {
        const Account = (<User/>);
        const {rootPath, ordersPath, adminPath, accountsPath} = this.props;
        return (

            <div className="App">
                <Switch>
                    <Route path={ordersPath} component={Orders}/>
                    <Route exact path={adminPath} component={Admin}/>
                    <Route path={accountsPath} children={Account}/>
                    <Route path='/reset' component={ResetForm}/>
                    <Route path={rootPath} component={LandingPage}/>
                    <Route exact path='/login' component={LandingPage}/>
                    <Route exact path='/register' component={LandingPage}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rootPath: state.path.rootPath,
        ordersPath: state.path.ordersPath,
        adminPath: state.path.adminPath,
        accountsPath: state.path.accountsPath,
        activePath: state.path.activePath
    }
};

export default connect(mapStateToProps)(withAuthentication(withRouter(App)));
