/*Store*/
import {createStore, applyMiddleware, compose} from 'redux';
import RootReducer from '../Reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;