//Asynchronous management action creators
import {DONE_LOADING_DATA, LOADING_DATA} from "../constants/async";

export const loadingData = () => ({type: LOADING_DATA});
export const doneLoadingData = () => ({type: DONE_LOADING_DATA});