import { createStore, combineReducers } from 'redux';
import { authStateReducer } from './reducers';

const rootReducer = combineReducers({
    auth: authStateReducer,
});

const store = createStore(rootReducer);

export default store;
