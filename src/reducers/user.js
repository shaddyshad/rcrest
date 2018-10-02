/*
* Users reducers
* */
import {ERROR, LOADING_DATA, RECEIVED_USER, FINISH_LOADING_DATA} from '../constants'

const INITIAL_STATE = {};

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ERROR:
            return {...state, error: {...action.payload.error}, isLoading: false};
        case RECEIVED_USER:
            return {...state, user: {...action.payload.user}, isLoading: false};
        case LOADING_DATA:
            return {...state, isLoading: true};
        case FINISH_LOADING_DATA:
            return {...state, isLoading: false};
        default:
            return state;
    }
};


export default rootReducer;