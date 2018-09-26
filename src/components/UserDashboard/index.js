import React, {Component} from 'react';

import NavBar from './NavBar';
import Body from './Body';

import {auth} from '../../firebase';
import {LANDING} from "../../Constants/routes";

import withAuthorization from '../withAuthorization';
import withAuthentication from '../withAuthentication';

import {withRouter} from 'react-router-dom';
import {firebase} from "../../firebase";

class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authUser: null
        }
    }

    componentDidMount(){
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({authUser})
                : this.setState({authUser: null});
        });
    }

    handleSignout = (event) => {
        const {history} = this.props;
        auth.doSignOut()
            .then(function () {
                history.push(LANDING)
            })
            .catch(function (error) {
                console.log(error);
            });

        event.preventDefault();
        console.log("Logged out");
    };

    render() {
        const {authUser} = this.state;
        console.log(authUser);
        const authenticated = <div><NavBar username="Shad" notifications={4} doSignOut={this.handleSignout}/><Body user={authUser}/></div>;
        const notAuth = <div><h4>404 Not Found</h4></div>;
        const component = authUser ? authenticated : notAuth;
        return (
            component
        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthentication((withAuthorization(authCondition)(Root)));