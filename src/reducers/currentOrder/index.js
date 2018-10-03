import {combineReducers} from 'redux';

import information from './information';
import users from './users';
import messages from './messages';
import transactions from './transactions';
import request from './request';
import notifications from './notifications';

export default combineReducers({information, users, request, transactions, messages, notifications});