import {
    SET_ROOT_PATH,
    SET_ACCOUNTS_PATH,
    SET_ADMIN_PATH,
    SET_ORDERS_PATH,
    CHANGE_ACTIVE_PATH
} from "../constants";

const INITIAL_STATE = {
    rootPath: '/',
    ordersPath: '/orders',
    accountsPath: '/accounts',
    adminPath: '/admin',
    activePath: '/'
};

const pathReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ROOT_PATH:
            return {...state, rootPath: action.payload};
        case SET_ORDERS_PATH:
            return {...state, ordersPath: action.payload};
        case SET_ACCOUNTS_PATH:
            return {...state, accountsPath: action.payload};
        case SET_ADMIN_PATH:
            return {...state, adminPath: action.payload};
        case CHANGE_ACTIVE_PATH:{
            return {...state, activePath: action.payload}
        }
        default:
            return state;
    }
};

export default pathReducer;