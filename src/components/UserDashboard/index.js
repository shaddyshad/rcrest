import React, {Component} from 'react';

import NavBar from './NavBar';
import Body from './Body';

import {auth} from '../../firebase';
import {LANDING} from "../../Constants/routes";

import withAuthorization from '../withAuthorization';
import withAuthentication from '../withAuthentication';

import {firebase} from "../../firebase";
import Spinner from "../Landing/Loader";

class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
            loaderShown: false
        }
    }

    componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({authUser})
                : this.setState({authUser: null});
        });
    }

    handleSignout = (event) => {
        this.setState({loaderShown: true}, () => {
            setTimeout(() => {
                auth.doSignOut();
                this.setState({loaderShown: false})
            }, 1000)
        });
    };

    render() {
        const {authUser, loaderShown} = this.state;
        console.log(authUser);
        const authenticated = (
            <div>
                <NavBar user={authUser} notifications={4} doSignOut={this.handleSignout}/>
                <div>
                    {loaderShown ? <Spinner/> : <Body user={authUser}/>}

                </div>
            </div>
        );
        const notAuth = <div><h4>404 Not Found</h4></div>;
        const component = authUser ? authenticated : notAuth;
        return (
            component
        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthentication((withAuthorization(authCondition)(Root)));