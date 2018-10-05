/*Store*/
import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {load, save} from 'redux-localstorage-simple';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

const history = createBrowserHistory();
/*
    Saving to LocalStorage is achieved using Redux
    middleware. The 'save' method is called by Redux
    each time an action is handled by your reducer.
*/

const createStoreWithMiddleware
    =composeWithDevTools(applyMiddleware(
    thunk,
    routerMiddleware(history),
    save() // Saving done here
))(createStore);

/*
    Loading from LocalStorage happens during
    creation of the Redux store.
*/

const store = createStoreWithMiddleware(RootReducer, load());

export default store;
export {history}