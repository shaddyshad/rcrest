//Async management
/*
* Involves the management of actions that migh have side effects by setting the loading feature to indicate that the UI is fetching some
* data
* */

import {DONE_LOADING_DATA, LOADING_DATA} from "../../constants/async";

const asyncReducer = (state=false, action) => {
    switch (action.type) {
        case LOADING_DATA:
            return true;
        case DONE_LOADING_DATA:
            return false;
        default:
            return state;
    }
};

export default asyncReducer;