//Orders action creators
import {ADD_ORDER, INIT_ORDER_LIST} from "../constants";
import {database} from "../firebase/firebase";
import {CLASS_APPROVED, STATE_ORDER_COMPLETE} from "../constants/currentOrder/information";
import {loadingData} from "./async";

export const add_order = (order) => ({type: ADD_ORDER, payload: order});

export const init_order_list = (orders) => ({type: INIT_ORDER_LIST, payload: orders});

export const updateOrderList = (orderList) => dispatch => {
    dispatch(init_order_list(orderList));
};

export const fetchAndUpdateOrders = () => (dispatch, getState) => {
    //Fetch orders
    const user = getState().authUser;
    if(!user)
        return;
    let uid = user.uid;
    const orders = database.ref('/orders/'+uid);
    orders.on("value", snapshot => {
        dispatch(updateOrderList(snapshot.val()));
    })
};

export const init_update_order_payment = (orderID, transaction) => (dispatch, getState) => {
    //Save the order after payment
    dispatch(loadingData());
    //Prepare the transaction
    const uid = getState().authUser.uid;
    let tx = {};
    tx.ordersID = orderID;
    tx.userID = uid;
    tx.paid = transaction.paid;
    tx.transactionID = transaction.paymentID;
    tx.payerID = transaction.payerID;
    tx.amount = getState().orders[orderID].information.amount || 13;

    //Get an id at transactions/orderID
    const txID = database.ref().child('/transactions/'+orderID+'/').push().key;
    //Initiate the order and the users
    let updates = {};
    //Update the transaction
    updates['/transactions/'+orderID+'/'+txID] = tx;        ///transactions/$orderID/$txID
    updates['/orders/'+uid+'/'+orderID+'/information/class'] = CLASS_APPROVED;      ///orders/$uid/$orderID/information/class
    updates['/orders/'+uid+'/'+orderID+'/information/state'] = STATE_ORDER_COMPLETE;            ///orders/$uid/$orderID/information/state
    updates['/orders/'+uid+'/'+orderID+'/information/transactions/'+txID] = true;
    updates['/users/'+uid+'/transactions/'+txID] = true;
    //TODO update user transactions
    database.ref().update(updates);
};