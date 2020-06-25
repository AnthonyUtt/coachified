import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import ProtectedRoute from './components/protected-route';

// Constants
import routes from './constants/routes';

// Services
import Firebase, { FirebaseContext } from './services/firebase';

// Pages
import ChatPage from './pages/chat';
import HubPage from './pages/hub';
import SignInPage from './pages/sign-in/index';

const AppBase = () => {
    return (
        <div className="App">
            <Switch>
                <ProtectedRoute exact path={routes.home} component={HubPage} />
                <ProtectedRoute path={routes.chat} component={ChatPage} />
                <Route path={routes.signIn} component={SignInPage} />
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
