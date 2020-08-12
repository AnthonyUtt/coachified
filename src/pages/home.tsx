import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

// Constants
import routes from '../constants/routes';

// Redux
import store from '../redux';

const Home = () => {
    const [ redirect, setRedirect ] = useState(false);

    const unsubscribe = store.subscribe(() => {
        let state = store.getState();
        if (!state.auth.authUser) {
            setRedirect(true);
        }
    });

    useEffect(() => {
        return () => unsubscribe();
    });

    if (redirect) {
        return <Redirect to={routes.signIn} />
    }
    return (
        <div className="Home">
            <p>Home works!</p>
        </div>
    );
};

export default Home;