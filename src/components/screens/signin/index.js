import React from 'react';
//Login screen

import Landing from "../landing";
import {Redirect} from 'react-router-dom';
import {firebase} from "../../../firebase";

const signIn =  () => {
    const user = firebase.auth.currentUser;
    return user ? <Redirect to='/home'/> : <Landing form='signin'/>
};

export default signIn;