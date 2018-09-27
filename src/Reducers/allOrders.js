/*All orders*/
import {ALL_ORDERS} from "../Constants";

function allOrders(state, action) {
    switch (action.type) {
        case ALL_ORDERS:
        default:
            return [...state.orders];

    }
}