//actions
import {auth} from '../firebase';
import store from '../store';

import {
    CHANGE_ACTIVE_FORM,
    CHANGE_ADDITIONAL_PROPERTY,
    CHANGE_ORDER_PROPERTY, CHANGE_PAPER_CALCULATIONS_PROPERTY,
    CHANGE_PAPER_DETAILS_PROPERTY, CHANGE_PAPER_INSTRUCTIONS_PROPERTY, SAVE_ORDER_ANON,
    SET_ACCOUNTS_PATH,
    SET_ADMIN_PATH,
    SET_ORDERS_PATH,
    SET_ROOT_PATH,
    SIGN_IN_EMAIL_PASSWORD,
    SIGN_UP_EMAIL_PASSWORD,
    LOADING_DATA,
    ERROR,
    RECEIVED_USER,
    CHANGE_ACTIVE_PATH
} from "../Constants";


//Set orders path
export const setOrdersPath = path => ({type: SET_ORDERS_PATH, payload: path});

//Set the root path
export const setRootPath = path => ({type: SET_ROOT_PATH, payload: path});

//set admin path
export const setAdminPath = path => ({type: SET_ADMIN_PATH, payload: path});

//set accounts path
export const setAccountsPath = path => ({type: SET_ACCOUNTS_PATH, payload: path});

/*
* Orders actions
* */
export const changeOrderProperty = (key, value) => ({type: CHANGE_ORDER_PROPERTY, payload: {key, value}});

// Different sections of the orders should be operated independently
export const changePaperDetailsProperty = (key, value) => ({type:CHANGE_PAPER_DETAILS_PROPERTY, payload: {key, value}});
export const changePaperInstructionsProperty = (key, value) => ({type: CHANGE_PAPER_INSTRUCTIONS_PROPERTY, payload: {key, value}});
export const changePaperCalculationsProperty = (key, value) => ({type: CHANGE_PAPER_CALCULATIONS_PROPERTY, payload: {key, value}});
export const changeAdditionalFeaturesProperty = (key, value) => ({type: CHANGE_ADDITIONAL_PROPERTY, payload: {key, value}});
export const saveOrderAnon = order => ({type: SAVE_ORDER_ANON, payload: {order}});

//Orders form management
export const changeActiveForm = (formNumber) => ({type: CHANGE_ACTIVE_FORM, payload: formNumber});

//User management
export const signInUserWithEmailAndPassword = (email, password) => ({type: SIGN_IN_EMAIL_PASSWORD, payload: {email, password}});
export const signUpUserWithEmailAndPassword = (email, password) => ({type: SIGN_UP_EMAIL_PASSWORD, payload: {email, password}});

export const receivedUser = user => ({type: RECEIVED_USER, payload: {user}});

export const signInUser = (email, password) => {
    return (dispatch) => {
        dispatch(isLoadingData());
        //authenticate the user
        return auth.doSignInWithEmailAndPassword(email, password)
            .then(user => dispatch(receivedUser(user)))
            .catch(error => dispatch(receivedError(error)))
    }
};

export const signUpUser = (username, email, password) => {
    return dispatch => {
        dispatch(isLoadingData());
        //create the user
        return auth.doCreateUserWithEmailAndPassword(email, password)
            .then(user => {
                dispatch(receivedUser(user))
            })
            .catch(error => dispatch(receivedError(error)))
    }
};
//general management
export const isLoadingData = () => ({type: LOADING_DATA});
export const receivedError = error => ({type: ERROR, payload: {error}});

//Path management
export const changeActivePath = path => ({type: CHANGE_ACTIVE_PATH, payload: path});