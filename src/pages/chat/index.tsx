import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

// Components
import Chat from '../../components/chat';

// Constants
import routes from '../../constants/routes';

// Store
import store from '../../redux';

const HubPage = () => {
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
        <div className="ChatPage">
            <Chat />
        </div>
    );
};

export default HubPage;