import React from 'react';
import Body from "../../user/Body";
import {connect} from "react-redux";

const component = ({authUser}) => {
    return( authUser ? <Body screen={'checkout'}/> : 'Please login to checkout your order');
};

const mapStateToProps = state => {
    return {
        authUser: state.authUser
    }
}

export default connect(mapStateToProps)(component);