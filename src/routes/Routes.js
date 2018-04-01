import React from 'react';
import { Route, Switch } from 'react-router-dom';


// import all components
import PrivateRoute from './PrivateRoute.js';
import Items from '../containers/Items/';
import Login from '../containers/Login/';
import Share from '../containers/Share/';
import Profile from '../containers/Profile/';
import NotFound from '../containers/NotFound/';
import SignUp from '../containers/SignUp/';

const Routes = () => (
    <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/signup" component={SignUp} />
        <PrivateRoute exact path="/" component={Items} />
        <PrivateRoute exact path="/shares" component={Items} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PrivateRoute component={NotFound} />
    </Switch>
);

export default Routes;
