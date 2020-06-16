import React, { useContext } from 'react';

// Services
import Firebase, { FirebaseContext } from './services/firebase';

// Components
import SignInComponent from './components/sign-in';

const AppBase = () => {
    const firebase = useContext(FirebaseContext);

    const test = () => {
        const user = process.env.REACT_APP_DEV_EMAIL;
        const pass = process.env.REACT_APP_DEV_PASS;

        if (user && pass) {
            firebase?.doSignInWithEmailAndPassword(user, pass)
                .then((res) => console.log(res))
                .catch((err) => console.error(err));
        }
    };

    return (
        <div className="App">
            <button onClick={test}>Click Me!</button>
            <SignInComponent />
        </div>
    );
};

const App = () => {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <AppBase />
        </FirebaseContext.Provider>
    );
};

export default App;
