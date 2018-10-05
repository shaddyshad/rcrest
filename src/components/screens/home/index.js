//Dashboard, either writers or users
import React from 'react';
import Home from '../../user';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const component = ({authUser}) => (authUser ? <Home/> : <Redirect to={'/signin'}/>);

const mapStateToProps = state => {
    return {
        authUser: state.authUser
    }
};

export default connect(mapStateToProps)(component);