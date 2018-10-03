//Order request action creators

import {CLEAR_ORDER_REQUEST, EDIT_PROPERTY, INIT_REQUEST} from "../../constants/currentOrder/request";
import {updateOrder} from "./information";

//Initialization
export const init_request = () => ({type: INIT_REQUEST});


//Edit and save
export const editAndSave = (key, value) => dispatch => {
    dispatch(editProperty(key, value));
    dispatch(updateOrder());
};
export const editProperty = (key, value) => ({type: EDIT_PROPERTY, payload: {key, value}});

//Clearing
export const clear_request_order = () => ({type: CLEAR_ORDER_REQUEST});
