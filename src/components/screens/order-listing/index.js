import React from 'react';
import Body from '../../user/Body';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

const component = ({authUser}) =>
    <div>
        {authUser ? <Body screen="listing"/> : <Redirect to={'/signin'}/>}
    </div>
    ;

const mapStateToProps = state => {
    return {
        authUser: state.authUser
    }
};

export default connect(mapStateToProps)(component);