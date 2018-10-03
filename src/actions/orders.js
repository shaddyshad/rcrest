//Orders action creators
import {ADD_ORDER} from "../constants";

export const add_order = (order) => ({type: ADD_ORDER, payload: order});