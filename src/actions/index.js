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
    CHANGE_ACTIVE_PATH,
    FINISH_LOADING_DATA,
    ADD_ORDER,
    COMPLETE_ORDER, GET_PENDING, CLEAR_ORDER
} from "../constants";

import {replace, push} from 'connected-react-router';

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

export const doSaveOrder = () => (dispatch, getState) =>{
    dispatch(isLoadingData());
    const {currentOrder} = getState();
    dispatch(addOrder(currentOrder));
    dispatch(finishLoadingData());
    dispatch(clearOrder())
};

export const addOrder = order => {
    const tmp = {...order};
    //flatten the order - Move the inner level one level high
    let res = {};
    for(let key in tmp){
        if(typeof tmp[key] === 'object'){
            res = {...res, ...tmp[key]}
        }else{
            res = {...res, key: tmp[key]}
        }
    }
    return ({type: 'ADD_ORDER', payload: res})
};

export const clearOrder = () => ({type: CLEAR_ORDER});

export const completeOrder = ({type: COMPLETE_ORDER});
export const getPending = ({type: GET_PENDING});

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
            .then(user => {
                dispatch(receivedUser(user));
                dispatch(replace('/accounts'));

            })
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

export const signOutUser = () => dispatch => {
    dispatch(isLoadingData());

    //sign the user out
    return auth.doSignOut()
        .then(() => {
            dispatch(finishLoadingData());
            dispatch(replace('/login'))
        })
}
//general management
export const isLoadingData = () => ({type: LOADING_DATA});
export const finishLoadingData = () => ({type: FINISH_LOADING_DATA});
export const receivedError = error => ({type: ERROR, payload: {error}});

//Path management
export const changeActivePath = path => push(path);