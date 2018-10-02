import React, {Component} from 'react';

import NavBar from './NavBar';
import Body from './Body';

import {auth} from '../../firebase';

import {firebase} from "../../firebase";
import Spinner from "../shared/Loader";
import {connect} from "react-redux";
import {signOutUser} from "../../actions";

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
        const {user} = this.props;
        const authenticated = (
            <div>
                <NavBar user={user.user ? user.user.user : ''} notifications={0} doSignOut={() => signOutUser()}/>
                <div>
                    {/*{user.isLoading ? <Spinner/> : <Body/>}*/}
                    <Body/>

                </div>
            </div>
        );
        const notAuth = <div><h4>404 Not Found</h4></div>;
        const component = user.user ? authenticated : notAuth;
        return (
            component
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        doSignOut: dispatch(signOutUser())
    }
};

export default connect(mapStateToProps)(Root);