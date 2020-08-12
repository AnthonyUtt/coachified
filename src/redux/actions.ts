//
// Action Types
//

export const AUTH_STATE_CHANGED = 'AUTH_STATE_CHANGED';

//
// Other Constants
//

export interface Session { authUser: null }

//
// Type Interfaces
//

export interface AuthStateChangedAction { type: typeof AUTH_STATE_CHANGED; authUser: null }

//
// Action Creators
//

export function authStateChanged(authUser: null): AuthStateChangedAction {
    return {
        type: AUTH_STATE_CHANGED,
        authUser,
    };
}
