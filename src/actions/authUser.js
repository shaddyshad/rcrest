//Authentication action
import {RECEIVED_USER, SIGN_OUT} from "../constants/authUser";
import {init_student} from "./currentOrder/users";
import {doneLoadingData, loadingData} from "./async";
import {auth} from "../firebase";

export const receivedUser = authUser => ({type: RECEIVED_USER, payload: authUser});

export const authChanged = authUser => dispatch => {
    const {uid, email, displayName} = authUser ? authUser : null;
    dispatch(receivedUser({uid, email, displayName, role: 'student'}));
    dispatch(init_student({uid, email, displayName}));
};

export const signOut = () => dispatch => {
    dispatch(loadingData());
    auth.doSignOut();
    dispatch(signedOut());
    dispatch(doneLoadingData())
};

export const signedOut = () => ({type: SIGN_OUT});