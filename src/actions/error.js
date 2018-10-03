import {CLEAR_ERROR, SET_ERROR} from "../constants";

export const new_error = error => ({type: SET_ERROR, payload: error});
export const clear_error = () => ({type: CLEAR_ERROR});