import {connectedReduxRedirect} from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import Spinner from "./shared/Loader";
import {routerActions} from 'react-router-redux';


const locationHelper = locationHelperBuilder();

const userIsNotAuthenticated = connectedReduxRedirect({
    // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/landing',
    // This prevents us from adding the query parameter when we send the user away from the login page
    allowRedirectBack: false,
    // If selector is true, wrapper will not redirect
    // So if there is no user data, then we show the page
    authenticatedSelector: state => state.user === null,
    // A nice display name for this check
    wrapperDisplayName: 'UserIsNotAuthenticated'
})


const userIsAuthenticated = connectedReduxRedirect({
    redirectPath: '/login',
    authenticatedSelector: state => state.user !== null,
    wrapperDisplayName: 'UserIsAuthenticated',
    // This should be a redux action creator
    redirectAction: routerActions.replace,
})

export {
    userIsAuthenticated,
    userIsNotAuthenticated
};