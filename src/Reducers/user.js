/*
* Users reducers
* */
import {ERROR, LOADING_DATA, RECEIVED_USER} from '../Constants'

const INITIAL_STATE = {
    user: null,
    userSignedIn: false,
    error: null,
    isLoading: false
};

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ERROR:
            return {...state, error: {...action.payload.error}, isLoading: false};
        case RECEIVED_USER:
            return {...state, user: {...action.payload.user}, isLoading: false};
        case LOADING_DATA:
            return {...state, isLoading: true};
        default:
            return state;
    }
};


export default rootReducer;