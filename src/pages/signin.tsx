import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

// Components
import SignInForm from '../components/SignInForm';

// Constants
import routes from '../constants/routes';

// Redux
import store from '../redux';

const SignIn = () => {
    const [ redirect, setRedirect ] = useState(false);

    const unsubscribe = store.subscribe(() => {
        let state = store.getState();
        if (state.auth.authUser) {
            setRedirect(true);
        }
    });

    useEffect(() => {
        return () => unsubscribe();
    });

    if (redirect) {
        return <Redirect to={routes.home} />
    }
    
    return (
        <div className="SignIn">
            <SignInForm />
        </div>
    );
};

export default SignIn;