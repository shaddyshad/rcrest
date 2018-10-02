import {combineReducers} from 'redux';

import orders from './orders';
import currentOrder from './currentOrder';
import ordersForm from './ui_state/ordersForm';
import user from './user';
import async from './async';
import error from './error'


const rootReducer = combineReducers({orders, currentOrder, ordersForm, user, isLoading: async, error});

export default rootReducer;