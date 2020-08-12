import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import routes from '../../constants/routes';
import store from '../../redux';

const ProtectedRoute = ({ component: Component, ...otherProps}: RouteProps) => {
    if (!Component) {
        return null;
    }

    return (<Route {...otherProps} render={(props) =>(
        store.getState().auth.authUser
        ? <Component {...props} />
        : <Redirect to={routes.signIn} />
    )} />);
};

export default ProtectedRoute;