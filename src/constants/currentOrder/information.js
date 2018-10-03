//Information section management action creators

//BEGIN signals
export const SET_ORDER_AMOUNT = "SET_ORDER_AMOUNT";     //dispatched to set the order amount
export const SET_ORDER_STATE = "SET_ORDER_STATE";       //dispatched to transstate the order
export const UPDATE_ORDER = "UPDATE_ORDER";             //dispatched anytime the order is updates
export const INIT_INFORMATION = "INIT_INFORMATION";                 //dispatched to initialize the order and set the initial state
export const APPROVE_ORDER = "APPROVE_ORDER";
export const SET_ORDER_ID = "SET_ORDER_ID";                 //Set the order ID in information section
export const TRANSIT_ORDER_STATE = "TRANSIT_ORDER_STATE";           //transit the order
//END signals
//BEGIN Classification
export const CLASS_NULL = "NULL";
export const CLASS_PENDING = "PENDING";             //The order has been started but not paid for
export const CLASS_APPROVED = "APPROVED";               //The order has been paid for
export const CLASS_ASSIGNED = "ASSIGNED";           //The writer has been assigned
export const CLASS_IN_PROGRESS = "IN_PROGRESS";     //The order has been accpted
export const CLASS_ORDER_SUBMITTED = "ORDER_SUBMITTED";     //The writer has submitted the order back
export const CLASS_ORDER_CLOSED = "ORDER_CLOSED";           //Client accepted the order
//END Classification
//BEGIN state
export const STATE_NULL = "NULL";           //The null state
export const STATE_OPENED = "OPENED";       //The order has been created
export const STATE_WAITING_PAYMENT = "WAITING_PAYMENT";     //The order is complete but payments has not been completed
export const STATE_PROCESSING_PAYMENT = "PROCESSING_PAYMENT";       //The order is processing payment
export const STATE_ORDER_COMPLETE = "ORDER_COMPLETE";               //The order is complete and paid for - Should move into Posted
export const STATE_ORDER_DISPUTED = "ORDER_DISPUTED";               //Disputed order
export const STATE_ORDER_REVISED = "ORDER_REVISED";                 //In revision
//END state