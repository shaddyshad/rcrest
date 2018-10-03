/*
* Users reducers
* */
import {RECEIVED_USER, SIGN_OUT} from '../constants/authUser'

const rootReducer = (state = null, action) => {
    switch (action.type) {
        case RECEIVED_USER:
            return {...action.payload};
        case SIGN_OUT:
            return null;
        default:
            return state;
    }
};


export default rootReducer;