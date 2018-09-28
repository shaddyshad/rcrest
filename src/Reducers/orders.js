import {ADD_ORDER} from "../Constants";

const INITIAL_STATE = [
    {}
];

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ORDER:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default rootReducer;