/*
* Users action creators
* */

import {auth} from "../firebase";

export const doSignUp = (email, password) => dispatch => {
    dispatch(fetchData());
    auth.doCreateUserWithEmailAndPassword(email, password)
        .then(user => {
            //fetch the email
            dispatch(reveiveData());
            dispatch(verifyAccount(user));
        })
        .catch(error => {
            //dispatch an error
            dispatch(hasError(error));
        })
};