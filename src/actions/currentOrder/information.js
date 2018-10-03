//Notifications action creators

//INIT
import {
    INIT_INFORMATION,
    UPDATE_ORDER,
    APPROVE_ORDER,
    SET_ORDER_ID, TRANSIT_ORDER_STATE,
} from "../../constants/currentOrder/information";

export const init_information = () => ({type: INIT_INFORMATION});

//BEGIN signals
export const updateOrder = () => ({type: UPDATE_ORDER});
export const postOrder = () => ({type: APPROVE_ORDER});
export const set_order_id = (key) => ({type: SET_ORDER_ID, payload: key});
export const transit_state = (state) => ({type: TRANSIT_ORDER_STATE, payload: state});