import {init_information, transit_state} from "./information";
import {init_users} from "./users";
import {init_request} from "./request";
import {init_transactions} from "./transactions";
import {init_messages} from "./messages";
import {init_notifications} from "./notifications";
import {STATE_WAITING_PAYMENT} from "../../constants/currentOrder/information";
import {doneLoadingData, loadingData} from "../async";
import {database} from "../../firebase/firebase";
import {new_error} from '../error';
import {init_ui_post_state} from "../ui_state";

export const init_current_order = () => (dispatch, getState) => {
    dispatch(init_information());
    dispatch(init_users());
    dispatch(init_request());
    dispatch(init_transactions());
    dispatch(init_messages());
    dispatch(init_notifications());
    dispatch(init_ui_post_state())
};


//Initiate save order
export const init_save_order_request = () => (dispatch, getState) => {
    //prepare the request for posting by transitioning it to waiting payment state
    dispatch(transit_state(STATE_WAITING_PAYMENT));
    //clone the request
    let order = {...getState().currentOrder};
    let request = {...order.request};

    //Get ids and load data
    const orderID = database.ref().child('orders').push().key;
    const requestID = database.ref().child('requests/'+orderID).push().key;
    const uid = getState().authUser ? getState().authUser.uid : null;

    request.orderID = orderID;
    order.request = {requestID, discipline: request.discipline, pages: request.pages};

    //save
    let updates = {};

    updates['requests/'+orderID] = request;
    updates['orders/'+uid+'/'+orderID] = order;
    database.ref().update(updates)
        .then(() => {
            dispatch(doneLoadingData())
        })
        .catch((err) => {
            dispatch(new_error(err));
            dispatch(doneLoadingData());
        });

};

//Initiate the checkout process
export const init_order_checkout = () => dispatch => {
    dispatch(loadingData());
}
