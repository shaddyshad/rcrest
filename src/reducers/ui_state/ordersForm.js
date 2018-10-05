//Forms reducers
//To manage the orders forms
import {CHANGE_ACTIVE_FORM, INIT_UI_POST_STATE} from "../../constants/index";

const INITIAL_STATE = 0;

const changePage = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE_FORM:
            return parseInt(action.payload, 10);

        case INIT_UI_POST_STATE:
            return 0;

        default:
            return state;

    }
};

export default changePage;