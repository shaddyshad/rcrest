//Forms reducers
//To manage the orders forms
import {CHANGE_ACTIVE_FORM} from "../../constants/index";

const INITIAL_STATE = {
    activeIdx: 0
};

const changePage = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_FORM:
            const idx = action.payload;
            return {...state, activeIdx: parseInt(idx)};
        default:
            return state;

    }
};

export default changePage;