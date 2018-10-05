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
*       serviceProvider: Paypal,
*       amount: Float,
*       state: String,
*       from: userObject,
*       toAccount: Account,
* }`
*
* * */
import {INIT_TRANSACTIONS} from "../../constants/currentOrder/transactions";


const transactionsReducer = (state=[], action) => {
    switch (action.type) {
        case INIT_TRANSACTIONS:
            return state;
        default:
            return state;
    }
};

export default transactionsReducer;