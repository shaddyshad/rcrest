//Manage orders

import {ADD_ORDER, INIT_ORDER_LIST} from "../constants";

const rootReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ORDER:
            return [...state, action.payload];

        case INIT_ORDER_LIST:
            return action.payload;
        default:
            return state;
    }
};

export default rootReducer;