//Manage orders

import {ADD_ORDER} from "../constants";

const rootReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ORDER:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default rootReducer;