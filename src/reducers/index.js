import {combineReducers} from 'redux';

import orders from './orders';
import currentOrder from './currentOrder';
import ordersForm from './ui_state/ordersForm';
import authUser from './authUser';
import async from './async';
import error from './error'


const rootReducer = combineReducers({orders, currentOrder, ordersForm, authUser, isLoading: async, error});

export default rootReducer;