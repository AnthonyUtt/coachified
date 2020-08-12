import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

//Components
import SignUpForm from '../components/SignUpForm';

// Constants
import routes from '../constants/routes';

// Redux
import store from '../redux';

const SignUp = () => {
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
        <div className="SignUp">
            <SignUpForm />
        </div>
    );
};

export default SignUp;