import React, {Component} from 'react';

import NavBar from './NavBar';
import Body from './Body';

import {firebase} from "../../firebase";
import {connect} from "react-redux";
import {authChanged} from "../../actions/authUser";
import {Redirect} from 'react-router-dom';

class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
            loaderShown: false
        }
    }

    componentDidMount() {
        const {authChanged} = this.props;
        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? authChanged(authUser)
                : authChanged(null);
        });
    }



    render() {
        const {user} = this.props;
        const authenticated = (
            <div>
                <NavBar user={user ? user : ''} notifications={0}/>
                <div>
                    <Body/>

                </div>
            </div>
        );
        const notAuth = <Redirect to='/signin' from='/home'/>;
        const component = this.props.user ? authenticated : notAuth;
        return (
            component
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.authUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        authChanged: authUser => dispatch(authChanged(authUser))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Root);