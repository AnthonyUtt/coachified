import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Constants
import routes from './constants/routes';

// Pages
import Home from './pages/home';
import SignIn from './pages/signin';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={routes.home} component={Home} />
                <Route path={routes.signIn} component={SignIn} />
            </Switch>
        </Router>
    );
};

export default App;
