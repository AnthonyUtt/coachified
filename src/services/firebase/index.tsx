import { createContext } from 'react';
import app from 'firebase/app';
import 'firebase/auth';

import store from '../../redux';
import { AuthStateChangedAction, AUTH_STATE_CHANGED } from '../../redux/actions';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
    auth: app.auth.Auth;

    constructor() {
        // We don't want to attempt to initialize a second
        // "DEFAULT" app within Firebase. Because we are not
        // using named apps, it's easiest to just see if
        // there is already an initialized app available.
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }

        this.auth = app.auth();

        this.auth.onAuthStateChanged((authUser) => {
            let action: AuthStateChangedAction = {
                type: AUTH_STATE_CHANGED,
                authUser: authUser,
            };

            store.dispatch(action);
        });
    }

    // Firebase Authentication Helpers

    doSignInWithEmailAndPassword =
        (email: string, password: string) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
}

export const FirebaseContext = createContext<Firebase | undefined>(undefined);

export default Firebase;