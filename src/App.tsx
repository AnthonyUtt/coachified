import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import ProtectedRoute from './components/ProtectedRoute';

// Constants
import routes from './constants/routes';

// Pages
import Home from './pages/home';
import SignIn from './pages/signin';
import SignUp from './pages/signup';

const App = () => {
    return (
        <Router>
            <Switch>
                <ProtectedRoute exact path={routes.home} component={Home} />
                <Route path={routes.signIn} component={SignIn} />
                <Route path={routes.signUp} component={SignUp} />
            </Switch>
        </Router>
    );
};

export default App;
