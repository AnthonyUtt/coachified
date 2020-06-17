import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Constants
import routes from './constants/routes';

// Services
import Firebase, { FirebaseContext } from './services/firebase';

// Pages
import SignInPage from './pages/sign-in/index';

const AppBase = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path={routes.home} component={SignInPage} />
            </Switch>
        </div>
    );
};

const App = () => {
    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <Router>
              <AppBase />
            </Router>
        </FirebaseContext.Provider>
    );
};

export default App;
