/*
* Manage both the invoice and the transactions
*
* Manage the opening and closing of invoices, transactions e.t.c
* Invoice - An invoice is opened whenever a new order is started. It reads the amount from a calculator and uses it for payments.
*
* STRUCTURES
*
* `invoice = {
*       invoiceID: ID,
*       baseAmount: Float,
*       amount: Float,
*       state: String    - Valid state - [OPENED, CLOSED, VERIFIED, CANCELLED],
*       linkedAccount: Account
* }
* transaction = {
*       form: String - Valid - ['PAYPAL'],
*       amount: Float,
*       state: String,
*       from: userObject,
*       toAccount: Account,
* }`
*
* * */
import {combineReducers} from 'redux';

const invoiceReducer = (state={}, action) => {
    return state;
};

const transactionsReducer = (state={}, action) => {
    return state;
};

export default combineReducers({invoice: invoiceReducer, transactions: transactionsReducer});