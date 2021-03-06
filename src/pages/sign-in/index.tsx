import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './sign-in.module.scss';

// Components
import SignInComponent from '../../components/sign-in';

// Constants
import routes from '../../constants/routes';

// Store
import store from '../../redux';

const SignInPage = () => {
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
        return <Redirect to={routes.home} />;
    }

    return (
        <div className="SignInPage">
            <div className={styles.background}>
                <SignInComponent />
            </div>
        </div>
    );
};

export default SignInPage;