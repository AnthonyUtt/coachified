import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

// Constants
import routes from '../../constants/routes';

// Services
import { FirebaseContext } from '../../services/firebase';

// Store
import store from '../../redux';

const HubPage = () => {
    const firebase = useContext(FirebaseContext);

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
        <div className="HubPage">
            <p>Hub works!</p>
            <button onClick={firebase?.doSignOut}>Sign Out</button>
        </div>
    );
};

export default HubPage;