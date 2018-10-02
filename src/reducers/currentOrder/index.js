import {combineReducers} from 'redux';

import information from './information';
import users from './users';
import messages from './messages';
import payments from './payments';
import request from './request';
import notifications from './notifications';

export default combineReducers({information, users, request, payments, messages, notifications});