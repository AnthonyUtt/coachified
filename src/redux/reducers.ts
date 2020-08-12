import { AuthStateChangedAction, AUTH_STATE_CHANGED, Session } from './actions';

const initialAuthState: Session = {
    authUser: false,
}

export function authStateReducer(state: Session = initialAuthState, action: AuthStateChangedAction): Session {
    switch (action.type) {
        case AUTH_STATE_CHANGED:
            let user = action.authUser;
            return {
                ...state,
                authUser: user,
            }
        default:
            return state;
    }
}