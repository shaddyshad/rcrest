/*
* General information about the order or the request usually set by the program
*
* Included fields like
* class - category the order belongs for classification
* state - the current state of the request
*           - Valid state are ['OPENED', 'POSTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'
* dates - Dates the order with information about the order open time and the time of last edit
*  `created_at`
*  `last_updated`
*
*  Final structure
*  {
*       class: String,
*       state: String,
*       createdAt: DateTime,
*       lastUpdated: DateTime,
*       amount: Float,
*       orderID
*  }
*
* */

import {
    APPROVE_ORDER,
    CLASS_APPROVED,
    CLASS_PENDING,
    INIT_INFORMATION,
    STATE_OPENED,
    UPDATE_ORDER,
    SET_ORDER_ID, TRANSIT_ORDER_STATE, SET_ORDER_AMOUNT
} from "../../constants/currentOrder/information";

//Initial state
const INITIAL_INFORMATION_STATE = {
    class: CLASS_PENDING,
    state: STATE_OPENED,
    createdAt: Date.now(),
    lastUpdated: Date.now(),
    orderID: null,
    amount: 13
};

const informationReducer = (state, action) => {
    switch (action.type) {
        case INIT_INFORMATION:
            //Initialize the information state
            return {...state, state: STATE_OPENED, class: CLASS_PENDING};

        case UPDATE_ORDER:
            //Set order and other to real state
            return {...state, lastUpdated: Date.now()};

        case APPROVE_ORDER:
            //Posted when paid or by admin
            return {...state, class: CLASS_APPROVED};

        case SET_ORDER_ID:
            //Set the order id
            return {...state, orderID: action.payload};

        case TRANSIT_ORDER_STATE:
            //Transition the order state
            return {...state, state: action.payload};

        case SET_ORDER_AMOUNT:
            return {...state, amount: action.payload}

        default:
            return {...INITIAL_INFORMATION_STATE};
    }
};

export default informationReducer;
