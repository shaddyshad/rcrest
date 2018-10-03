import React from 'react';
//All screens
import SignIn from './signin';
import Home from './home';
import Landing from './landing';
import Messages from './messages';
import Notifications from './notifications';
import Details from './order-details';
import Listing from './order-listing';
import PostOrder from './post-order';

import {Route, Switch} from "react-router-dom";
import NotFound from "../shared/404NotFound";


const Screen = () => (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/home' component={Home}/>
        <Route path='/messages' component={Messages}/>
        <Route path='/notifications' component={Notifications}/>
        <Route path='/order' component={Details}/>
        <Route path='/orders/:filter' component={Listing}/>
        <Route path='/post-order' component={PostOrder}/>
        <Route component={NotFound}/>
    </Switch>
);

export default Screen;