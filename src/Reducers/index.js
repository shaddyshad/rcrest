import {combineReducers} from 'redux';

import path from './path';
import orders from './orders';
import currentOrder from './currentOrder';
import ordersForm from './ordersForm';
import user from './user';

const rootReducer = combineReducers({path, orders, currentOrder, ordersForm, user});

export default rootReducer;